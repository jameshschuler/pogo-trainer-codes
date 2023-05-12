import { ApiResponse } from "@/types/common.ts";
import { RouterContext, Status } from "oak";

export function handleResponse<T>(ctx: RouterContext<string>, response?: ApiResponse<T>, status: Status = Status.OK) {
  if (response?.errorMessage) {
    response.success = false;
  }

  ctx.response.body = response;
  ctx.response.status = status;
}

export function handleErrorResponse(
  ctx: RouterContext<string>,
  status: Status = Status.InternalServerError,
  errorMessage?: string,
) {
  ctx.response.body = {
    errorMessage,
    successful: false,
  };
  ctx.response.status = status;
}

export function createResponse<T>(data: T) {
  return data as ApiResponse<T>;
}
