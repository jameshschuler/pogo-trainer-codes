import { ApiResponse } from "@/types/common.ts";
import { RouterContext, Status } from "oak";

export function handleResponse<T>(ctx: RouterContext<string>, response?: ApiResponse<T>, status: Status = Status.OK) {
  if (response?.errorMessage) {
    response.success = false;
  }

  ctx.response.body = response;
  ctx.response.status = status;
  ctx.response.headers.append(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept",
  );
}

export function handleErrorResponse(
  ctx: RouterContext<string>,
  errorMessage?: string | null,
  status: Status = Status.InternalServerError,
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
