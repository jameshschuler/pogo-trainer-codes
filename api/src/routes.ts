import authController from "@/controllers/auth.controller.ts";
import profileController from "@/controllers/profile.controller.ts";
import { searchTrainers } from "@/controllers/trainers.controller.ts";
import { logError } from "@/handlers/commands/createLog.handler.ts";
import { syncTrainerCodes } from "@/handlers/commands/syncTrainerCodes.handler.ts";
import { SyncTrainersRequest } from "@/types/requests/syncTrainersRequest.ts";
import { validateApiKey } from "@/utils/auth.ts";
import { handleResponse } from "@/utils/response.ts";
import { Router, RouterContext, Status } from "oak";

export function setupRoutes(router: Router<Record<string, any>>) {
  router
    .get("/api/health", (ctx: RouterContext<string>) => {
      ctx.response.body = {
        status: "Healthy",
        message: "Welcome to PoGo Trainer Codes",
      };
    })
    .post("/api/auth/login", authController.login)
    .get("/api/profile", profileController.getProfile)
    .get("/api/trainer-codes/search", searchTrainers)
    // TODO: move to controller
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
}
