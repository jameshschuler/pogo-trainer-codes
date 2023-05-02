import { logError } from "@/handlers/commands/createLog.handler.ts";
import queries from "@/handlers/queries/index.ts";
import { getQuery } from "helpers";
import { Status } from "https://deno.land/std@0.152.0/http/http_status.ts";
import { RouterContext } from "router";
import { SearchTrainersRequest } from "../types/requests/searchTrainersRequest.ts";
import { handleResponse } from "../utils/common.ts";

export async function searchTrainers(ctx: RouterContext<string>) {
  try {
    const request = getQuery(ctx) as SearchTrainersRequest;
    const response = await queries.searchTrainers(request);

    handleResponse(ctx, response);
  } catch (e) {
    await logError("Error occurred while searching for trainers", e);
    ctx.response.body = {
      success: false,
      message: "Error occurred while searching for trainers",
    };
    ctx.response.status = Status.InternalServerError;
  }
}
