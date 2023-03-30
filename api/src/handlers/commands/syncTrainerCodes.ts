import { ApiResponse } from "@/types/common.ts";
import { TrainerRowData } from "@/types/models.ts";
import { SyncTrainersResponse } from "@/types/response/syncTrainersResponse.ts";
import prisma from "@prisma";
import { parse as parseCsv } from "https://deno.land/std/encoding/csv.ts";
import { Trainer, TrainerAlt } from "../../../generated/client/deno/index.d.ts";

export async function syncTrainerCodes(source: string): Promise<ApiResponse<SyncTrainersResponse>> {
  const url: string | undefined = Deno.env.get("SHEET_URL");

  if (!url || url === "") {
    return {
      success: false,
      message: "Unable to sync trainer codes.",
    };
  }

  const response = await fetch(url);
  const data = await response.text();

  const content = (await parseCsv(data, {
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
  })) as unknown as TrainerRowData[];

  // Filter out duplicates
  const unique = new Array<TrainerRowData>();

  content.forEach((row: TrainerRowData) => {
    // Check if the unique array has a matching row (username, trainerCode, trainerName)
    // If not, add it to the unique array otherwise do nothing
    unique.filter(
        (u: TrainerRowData) =>
          u.username === row.username && u.trainerCode === row.trainerCode && u.trainerName === row.trainerName,
      ).length > 0
      ? null
      : unique.push(row);
  });

  const mappedTrainerData = unique.map((row) => {
    return {
      username: row.username,
      trainer_code: row.trainerCode,
      trainer_name: row.trainerName,
      source: source,
    } as Trainer;
  });

  // Note: If rows are removed from the import data, we'll lost that data after syncing
  const [_deleteTrainerAltsQuery, deleteTrainersQuery, createQuery] = await prisma.$transaction([
    prisma.trainerAlt.deleteMany({}),
    prisma.trainer.deleteMany({}),
    prisma.trainer.createMany({
      data: mappedTrainerData,
    }),
  ]);

  createTrainerAlts(unique);

  const { total_row_created, total_rows_deleted, total_rows_imported } = await prisma.syncHistory.create({
    data: {
      total_rows_imported: content.length,
      total_rows_deleted: deleteTrainersQuery.count,
      total_row_created: createQuery.count,
      source: source,
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

function createTrainerAlts(trainerRowData: TrainerRowData[]) {
  // Get any rows that have alt trainer code / name data
  const hasAlts = trainerRowData.filter(
    (row) =>
      row.altTrainerName !== "" ||
      row.altTrainerCode !== "" ||
      row.altTrainerName2 !== "" ||
      row.altTrainerCode2 !== "" ||
      row.altTrainerName3 !== "" ||
      row.altTrainerCode3 !== "" ||
      row.altTrainerName4 !== "" ||
      row.altTrainerCode4 !== "",
  );

  // Loop through each row and use username, code, and trainerName to lookup trainer id
  // If trainer is found, create row for each alt trainer code / name pair
  hasAlts.forEach(async (trd: TrainerRowData) => {
    const trainer = await prisma.trainer.findFirst({
      where: {
        username: {
          equals: trd.username,
        },
        trainer_code: {
          equals: trd.trainerCode,
        },
        trainer_name: {
          equals: trd.trainerName,
        },
      },
      select: {
        id: true,
      },
    });

    if (trainer) {
      const trainerAlts = [
        createTrainerAlt(trd.altTrainerCode, trd.altTrainerName),
        createTrainerAlt(trd.altTrainerCode2, trd.altTrainerName2),
        createTrainerAlt(trd.altTrainerCode3, trd.altTrainerName3),
        createTrainerAlt(trd.altTrainerCode4, trd.altTrainerName4),
      ]
        .filter((ta) => ta !== null)
        .map((t, index) => {
          return {
            ...t,
            trainer_id: trainer.id,
            order: index,
          };
        }) as TrainerAlt[];

      await prisma.trainerAlt.createMany({
        data: trainerAlts,
      });
    }
  });
}

function createTrainerAlt(code?: string, name?: string): TrainerAlt | null {
  if (code !== "" || name !== "") {
    return {
      alt_trainer_name: name ?? "",
      alt_trainer_code: code ?? "",
    } as TrainerAlt;
  }

  return null;
}
