import authController from "@/controllers/auth.controller.ts";
import profileController from "@/controllers/profile.controller.ts";
import { searchTrainers } from "@/controllers/trainers.controller.ts";
import { logError } from "@/handlers/commands/createLog.handler.ts";
import { syncTrainerCodes } from "@/handlers/commands/syncTrainerCodes.handler.ts";
import { validateApiKey } from "@/utils/auth.ts";
import { handleErrorResponse, handleResponse } from "@/utils/response.ts";
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
    .post("/api/auth/logout", authController.logout)
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

        const response = await syncTrainerCodes();

        handleResponse(ctx, response);
      } catch (e) {
        await logError("Unable to sync trainer codes.", e, ctx.state.requestId);
        handleErrorResponse(ctx, "Unable to sync trainer codes.");
      }
    });
}
