import { RouterContext } from "oak";
import { ApiResponse } from "../types/common.ts";

export function handleResponse<T>(ctx: RouterContext<string>, response: ApiResponse<T>) {
  ctx.response.body = response;
  ctx.response.status = response.success ? 200 : 500;
}
