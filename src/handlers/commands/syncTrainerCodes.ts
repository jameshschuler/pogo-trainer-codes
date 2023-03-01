import { ApiResponse } from "@/types/common.ts";
import { TrainerRowData } from "@/types/models.ts";
import { SyncTrainersResponse } from "@/types/response/syncTrainersResponse.ts";
import { env } from "@/utils/env.ts";
import { prisma } from "@prisma";
import { parse as parseCsv } from "https://deno.land/std/encoding/csv.ts";
import { Trainer } from "../../../generated/client/deno/index.d.ts";

export async function syncTrainerCodes(): Promise<ApiResponse<SyncTrainersResponse>> {
  const url: string | undefined = env["SHEET_URL"];

  if (!url || url === "") {
    return {
      success: false,
      message: "Unable to sync trainer codes.",
    };
  }

  const response = await fetch(url);
  const data = await response.text();

  const content = await parseCsv(data, {
    skipFirstRow: true,
    columns: [
      "trainerName",
      "username",
      "trainerCode",
      "altTrainerName",
      "altTrainerCode",
      "altTrainerName2",
      "altTrainerCode2",
      "altTrainerName3",
      "altTrainerCode3",
      "altTrainerName4",
      "altTrainerCode4",
    ],
  }) as unknown as TrainerRowData[];

  // Filter out duplicates
  const unique = new Array<TrainerRowData>();

  content.forEach((row: TrainerRowData) => {
    // Check if the unique array has a matching row (username, trainerCode, trainerName)
    // If not, add it to the unique array otherwise do nothing
    unique.filter((u: TrainerRowData) =>
        u.username === row.username &&
        u.trainerCode === row.trainerCode &&
        u.trainerName === row.trainerName
      )
        .length > 0
      ? null
      : unique.push(row);
  });

  // TODO: map trainer alts
  const mappedData = unique.map((row) => {
    return {
      username: row.username,
      trainer_code: row.trainerCode,
      trainer_name: row.trainerName,
    } as Trainer;
  });

  // Note: If rows are removed from the import data, we'll lost that data after syncing
  const [deleteQuery, createQuery] = await prisma.$transaction([
    prisma.trainer.deleteMany({}),
    prisma.trainer.createMany({
      data: mappedData,
    }),
  ]);

  const { total_row_created, total_rows_deleted, total_rows_imported } = await prisma.syncHistory.create({
    data: {
      total_rows_imported: content.length,
      total_rows_deleted: deleteQuery.count,
      total_row_created: createQuery.count,
    },
  });

  return {
    success: true,
    message: "Successfully synced trainer codes.",
    data: {
      totalRowsImported: total_rows_imported,
      totalRowsCreated: total_row_created,
      totalRowsDeleted: total_rows_deleted,
    },
  };
}
