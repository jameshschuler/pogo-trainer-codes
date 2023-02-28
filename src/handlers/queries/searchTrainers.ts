import { ApiResponse } from "@/types/common.ts";
import { SearchTrainersRequest } from "@/types/requests/searchTrainersRequest.ts";
import { SearchTrainersResponse } from "@/types/response/searchTrainersResponse.ts";
import { prisma } from "@prisma";

const defaultPageSize = 15;
const maxPageSize = 50;

export async function searchTrainers(request: SearchTrainersRequest): Promise<ApiResponse<SearchTrainersResponse>> {
  const pageSize = !request.pageSize || request.pageSize < 0 || request.pageSize > maxPageSize
    ? defaultPageSize
    : request.pageSize;

  const page = request.page ?? 0;

  const results = await prisma.trainer.findMany({
    where: {
      username: {
        startsWith: request.query,
        mode: "insensitive",
      },
    },
    take: page,
    skip: page * pageSize,
  });

  return {
    data: {
      currentPage: page,
      pageSize,
      totalCount: 1, // TODO:
      trainers: results.map((t) => {
        return {
          trainerCode: t.trainer_code,
          trainerName: t.trainer_name,
          username: t.username,
        };
      }),
    },
    success: true,
  };
}
