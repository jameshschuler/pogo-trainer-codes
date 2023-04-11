import { ApiResponse } from "@/types/common.ts";
import { SearchTrainersRequest } from "@/types/requests/searchTrainersRequest.ts";
import { SearchTrainersResponse, TrainerResponse } from "@/types/response/searchTrainersResponse.ts";
import prisma from "@prisma";
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

  let results = new Array<Trainer>();

  if (!request.query || request.query === "") {
    results = await prisma.trainer.findMany({
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
    });
  } else {
    results = await prisma.trainer.findMany({
      orderBy: [
        {
          trainer_name: "asc",
        },
      ],
      where: {
        source: {
          equals: source,
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
    });
  }

  const trainers: TrainerResponse[] = results.map((t) => {
    return {
      trainerCode: t.trainer_code,
      trainerName: t.trainer_name,
      username: t.username,
      source: t.source,
    };
  });

  const totalCount = await prisma.trainer.count();
  const pageCount = Math.ceil(totalCount / pageSize);

  return {
    data: {
      currentPage: page,
      pageCount,
      pageSize,
      totalCount,
      trainers,
    },
    success: true,
  };
}
