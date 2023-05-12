import { getDiscordProfile } from "@/handlers/commands/getDiscordProfile.handler.ts";
import { LoginRequest, LoginResponse } from "@/types/login.ts";
import { hashValue } from "@/utils/auth.ts";
import { isNullOrUndefined } from "@/utils/common.ts";
import { createResponse, handleErrorResponse, handleResponse } from "@/utils/response.ts";
import { Status } from "oak";
import { RouterContext } from "router";

// TODO: Validate request with zod
async function login(ctx: RouterContext<string>) {
  const body = ctx.request.body({ type: "json" });
  const request = (await body.value) as LoginRequest;

  const meResponse = await getDiscordProfile(request.accessToken!);
  if (!isNullOrUndefined(meResponse)) {
    const hashedAccessToken = await hashValue(request.accessToken);
    ctx.state.session.set("accessToken", hashedAccessToken);
    ctx.state.session.set("userId", meResponse!.id);

    handleResponse(ctx, createResponse<LoginResponse>({ userId: meResponse!.id }));
  } else {
    await ctx.state.session.deleteSession();
    handleErrorResponse(ctx, Status.InternalServerError, "Unable to login. Please try again later.");
  }
}

export default {
  login,
};
