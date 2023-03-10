import { ApiResponse } from "@/types/common.ts";
import { SearchTrainersRequest } from "@/types/requests/searchTrainersRequest.ts";
import { SearchTrainersResponse, TrainerResponse } from "@/types/response/searchTrainersResponse.ts";
import prisma from "@prisma";

const defaultPageSize = 15;
const maxPageSize = 50;

export async function searchTrainers(request: SearchTrainersRequest): Promise<ApiResponse<SearchTrainersResponse>> {
  const pageSize =
    !request.pageSize || isNaN(request.pageSize) || request.pageSize < 0 || request.pageSize > maxPageSize
      ? defaultPageSize
      : Number(request.pageSize);

  const page = request.page && !isNaN(request.page) ? Number(request.page) : 1;

  const results = await prisma.trainer.findMany({
    orderBy: [
      {
        trainer_name: "asc",
      },
    ],
    where: {
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

  const trainers: TrainerResponse[] = results.map((t) => {
    return {
      trainerCode: t.trainer_code,
      trainerName: t.trainer_name,
      username: t.username,
    };
  });

  const totalCount = await prisma.trainer.count();

  return {
    data: {
      currentPage: page,
      pageSize,
      totalCount,
      trainers,
      trainerCount: trainers.length,
    },
    success: true,
  };
}
