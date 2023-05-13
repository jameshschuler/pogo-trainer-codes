import { ApiResponse } from "@/types/common.ts";
import { TrainerRowData } from "@/types/models.ts";
import { SyncTrainersResponse } from "@/types/response/syncTrainersResponse.ts";
import prisma, { TrainerWithAlts } from "@prisma";
import { parse } from "https://deno.land/std@0.182.0/encoding/csv.ts";
import { TrainerAlt } from "../../../generated/client/deno/index.d.ts";

const source = "San Diego";

export async function syncTrainerCodes(): Promise<ApiResponse<SyncTrainersResponse>> {
  const url: string | undefined = Deno.env.get("SHEET_URL");

  if (!url || url === "") {
    return {
      success: false,
      errorMessage: "Unable to sync trainer codes.",
    };
  }

  const response = await fetch(url);
  const data = await response.text();

  const mappedTrainerData = parseTrainerCsvData(data);

  const allTrainers = await prisma.trainer.findMany({
    where: {
      source: {
        equals: source,
      },
    },
    select: {
      trainer_code: true,
    },
  });

  let createdCount = 0;
  for (const trainerData of mappedTrainerData) {
    const existingTrainer = allTrainers.find((t) => t.trainer_code === trainerData.trainer_code);

    if (!existingTrainer) {
      // Can't batch create entities with related entities
      await prisma.trainer.create({
        data: {
          ...trainerData,
          alts: {
            create: trainerData.alts,
          },
        },
        include: {
          alts: true,
        },
      });

      createdCount++;
    }
  }

  await prisma.syncHistory.create({
    data: {
      total_rows_imported: mappedTrainerData.length,
      total_row_created: createdCount,
      source: source,
    },
  });

  return {
    success: true,
    data: {
      totalRowsImported: mappedTrainerData.length,
      totalRowsCreated: createdCount,
      oldTotalTrainerCount: allTrainers.length,
      newTotalTrainerCount: allTrainers.length + createdCount,
    },
  };
}

function parseTrainerCsvData(data: string): TrainerWithAlts[] {
  const content = parse(data, {
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
  } as any) as unknown as TrainerRowData[];

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

  return unique.map((row) => {
    const altData = createTrainerAlts(row);

    return {
      alts: altData,
      username: row.username,
      trainer_code: row.trainerCode,
      trainer_name: row.trainerName,
      source,
    } as TrainerWithAlts;
  });
}

function createTrainerAlts(trd: TrainerRowData): TrainerAlt[] {
  const hasAlts = trd.altTrainerName !== "" ||
    trd.altTrainerCode !== "" ||
    trd.altTrainerName2 !== "" ||
    trd.altTrainerCode2 !== "" ||
    trd.altTrainerName3 !== "" ||
    trd.altTrainerCode3 !== "" ||
    trd.altTrainerName4 !== "" ||
    trd.altTrainerCode4 !== "";

  if (hasAlts) {
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
          //trainer_id: trainer.id,
          order: index,
        };
      }) as TrainerAlt[];
    return trainerAlts;
  }

  return [];
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
