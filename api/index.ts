import { logError } from "@/handlers/commands/createLog.ts";
import { syncTrainerCodes } from "@/handlers/commands/syncTrainerCodes.ts";
import { searchTrainers } from "@/handlers/queries/searchTrainers.ts";
import { logRequest } from "@/middleware/logRequest.ts";
import { SearchTrainersRequest } from "@/types/requests/searchTrainersRequest.ts";
import { validateApiKey } from "@/utils/auth.ts";
import { handleResponse } from "@/utils/common.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { getQuery } from "https://deno.land/x/oak@v11.1.0/helpers.ts";
import { Application, Router, RouterContext, Status } from "oak";
import { SyncTrainersRequest } from "./src/types/requests/syncTrainersRequest.ts";

const app = new Application();
app.use(oakCors());

const router = new Router();

// Log request information
app.use(logRequest);

router
  .get("/api/health", (ctx: RouterContext<string>) => {
    ctx.response.body = {
      status: "Healthy",
      message: "Welcome to PoGo Trainer Codes",
    };
  })
  .get("/api/trainer-codes", async (ctx: RouterContext<string>) => {
    try {
      const request = getQuery(ctx) as SearchTrainersRequest;
      const response = await searchTrainers(request);

      handleResponse(ctx, response);
    } catch (e) {
      await logError("Error occurred while searching for trainers", e);
      ctx.response.body = {
        success: false,
        message: "Error occurred while searching for trainers",
      };
      ctx.response.status = Status.InternalServerError;
    }
  })
  .post("/api/trainer-codes/sync", async (ctx: RouterContext<string>) => {
    try {
      const isValidApiKey = await validateApiKey(ctx.request.headers.get("X-API-KEY"));
      if (!isValidApiKey) {
        ctx.response.status = Status.Unauthorized;
        return;
      }

      const body = ctx.request.body();
      const result = (await body.value) as SyncTrainersRequest;
      const source = result?.source;

      if (!source) {
        await logError("Missing source", null, ctx.state.requestId);
        ctx.response.body = {
          success: false,
          message: "Missing source",
        };
        ctx.response.status = Status.BadRequest;
        return;
      }

      const response = await syncTrainerCodes(source!);

      handleResponse(ctx, response);
    } catch (e) {
      await logError("Unable to sync trainer codes.", e, ctx.state.requestId);
      ctx.response.body = {
        success: false,
        message: "Unable to sync trainer codes.",
      };
      ctx.response.status = Status.InternalServerError;
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
