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
    ctx.response.status = Status.Forbidden;
    ctx.response.body = {
      message: "Forbidden",
    };
    return;
  }

  const storedAccessToken: string = await ctx.state.session.get("accessToken");
  if (!isNullOrUndefined(storedAccessToken)) {
    const result = await compareValues(accessToken!, storedAccessToken);
    if (result) {
      await next();
      return;
    }
  }

  await ctx.state.session.deleteSession();

  handleErrorResponse(ctx, null, Status.Forbidden);
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

  handleErrorResponse(ctx, null, Status.Forbidden);
}
