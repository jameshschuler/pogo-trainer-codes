import { logError } from "@/handlers/commands/createLog.handler.ts";
import { getDiscordProfile } from "@/handlers/commands/getDiscordProfile.handler.ts";
import { LoginRequest, LoginResponse } from "@/types/login.ts";
import { hashValue } from "@/utils/auth.ts";
import { isNullOrUndefined } from "@/utils/common.ts";
import { createResponse, handleErrorResponse, handleResponse } from "@/utils/response.ts";
import { RouterContext } from "router";

// TODO: Validate request with zod
async function login(ctx: RouterContext<string>) {
  const body = ctx.request.body({ type: "json" });
  const request = (await body.value) as LoginRequest;

  const meResponse = await getDiscordProfile(request.accessToken!);
  if (!isNullOrUndefined(meResponse)) {
    const hashedAccessToken = await hashValue(request.accessToken);
    console.error("hashed at");
    console.error("Session missing ", ctx.state.session === undefined);
    ctx.state.session.set("accessToken", hashedAccessToken);
    ctx.state.session.set("userId", meResponse!.id);

    handleResponse(ctx, createResponse<LoginResponse>({ userId: meResponse!.id }));
  } else {
    await logError("Unable to get discord profile", meResponse);
    await ctx.state.session.deleteSession();
    handleErrorResponse(ctx, "Unable to login. Please try again later.");
  }
}

async function logout(ctx: RouterContext<string>) {
  await ctx.state.session.deleteSession();
  handleResponse(ctx);
}

export default {
  login,
  logout,
};
