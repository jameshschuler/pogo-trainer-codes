import { prisma } from "@/deps.ts";
import { ApiResponse } from "@/types/common.ts";
import { SearchTrainersRequest } from "@/types/requests/searchTrainersRequest.ts";
import { SearchTrainersResponse, TrainerResponse } from "@/types/response/searchTrainersResponse.ts";
import { Trainer } from "../../../generated/client/deno/index.d.ts";

const defaultPageSize = 15;
const maxPageSize = 50;

export async function searchTrainers(request: SearchTrainersRequest): Promise<ApiResponse<SearchTrainersResponse>> {
  const pageSize =
    !request.pageSize || isNaN(request.pageSize) || request.pageSize < 0 || request.pageSize > maxPageSize
      ? defaultPageSize
      : Number(request.pageSize);

  const page = request.page && !isNaN(request.page) ? Number(request.page) : 1;
  const source = request.source ?? "San Diego";

  let totalCount = 0;
  let queryTransaction;
  let results = new Array<Trainer>();

  if (!request.query || request.query === "") {
    queryTransaction = prisma.$transaction([
      prisma.trainer.count(),
      prisma.trainer.findMany({
        orderBy: [
          {
            trainer_name: "asc",
          },
        ],
        where: {
          source: {
            equals: source,
            mode: "insensitive",
          },
        },
        take: pageSize,
        skip: (page - 1) * pageSize,
      }),
    ]);
  } else {
    queryTransaction = prisma.$transaction([
      prisma.trainer.count({
        where: {
          source: {
            equals: source,
            mode: "insensitive",
          },
          OR: [
            {
              username: {
                startsWith: request.query,
                mode: "insensitive",
              },
            },
            {
              trainer_name: {
                startsWith: request.query,
                mode: "insensitive",
              },
            },
          ],
        },
      }),
      prisma.trainer.findMany({
        orderBy: [
          {
            trainer_name: "asc",
          },
        ],
        where: {
          source: {
            equals: source,
            mode: "insensitive",
          },
          OR: [
            {
              username: {
                startsWith: request.query,
                mode: "insensitive",
              },
            },
            {
              trainer_name: {
                startsWith: request.query,
                mode: "insensitive",
              },
            },
          ],
        },
        take: pageSize,
        skip: (page - 1) * pageSize,
      }),
    ]);
  }

  const queryResult = await queryTransaction;
  totalCount = queryResult[0];
  results = queryResult[1];

  const trainers: TrainerResponse[] = results.map((t) => {
    return {
      trainerCode: t.trainer_code,
      trainerName: t.trainer_name,
      username: t.username,
      source: t.source,
    };
  });

  return {
    data: {
      currentPage: page,
      pageCount: Math.ceil(totalCount / pageSize),
      pageSize,
      totalCount,
      trainers,
    },
    success: true,
  };
}
