import { logError } from "@/handlers/commands/createLog.handler.ts";
import { compareValues } from "@/utils/auth.ts";
import { isNullOrEmpty, isNullOrUndefined } from "@/utils/common.ts";
import { handleErrorResponse } from "@/utils/response.ts";
import { RouterContext, Status } from "oak";

const allowAnonymousRoutes = [
  "/api/auth/login",
  "/api/health",
  "/api/trainer-codes/search",
  "/api/trainer-codes/sync",
];

export async function validateAccessToken(ctx: RouterContext<string>, next: () => Promise<void>) {
  if (allowAnonymousRoutes.includes(ctx.request.url.pathname)) {
    await next();
    return;
  }

  const authHeader = ctx.request.headers.get("Authorization");
  const accessToken = authHeader?.split(" ")[1];

  if (isNullOrUndefined(accessToken)) {
    await logError("No request access token found.");
    handleErrorResponse(ctx, "Unauthorized", Status.Unauthorized);
    return;
  }

  let errorMessage = "No access token found in session.";
  const storedAccessToken: string = await ctx.state.session.get("accessToken");
  if (!isNullOrUndefined(storedAccessToken)) {
    const result = await compareValues(accessToken!, storedAccessToken);
    if (result) {
      await next();
      return;
    } else {
      errorMessage = "Access Tokens don't match";
    }
  }

  await logError(errorMessage, ctx.state.session);
  await ctx.state.session.deleteSession();

  handleErrorResponse(ctx, null, Status.Unauthorized);
}

export async function validateUserId(ctx: RouterContext<string>, next: () => Promise<void>) {
  if (allowAnonymousRoutes.includes(ctx.request.url.pathname)) {
    await next();
    return;
  }

  const userId: string = await ctx.state.session.get("userId");

  if (!isNullOrEmpty(userId)) {
    await next();
    return;
  }

  await ctx.state.session.deleteSession();

  await logError("No user id found in session");

  handleErrorResponse(ctx, "Unauthorized", Status.Unauthorized);
}
