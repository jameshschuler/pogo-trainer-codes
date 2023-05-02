import createProfile from "@/handlers/commands/createProfile.handler.ts";
import { CreateProfileRequest } from "@/types/requests/createProfileRequest.ts";
import { handleResponse } from "@/utils/common.ts";
import { Status } from "oak";
import { RouterContext } from "router";

export function getProfile(ctx: RouterContext<string>) {
  // TODO: need to verify user somehow or get user id and store that?
  // TODO: pass access code and verify somehow?
  ctx.response.body = {
    message: "hello",
  };
}

export async function create(ctx: RouterContext<string>) {
  const errorResponse = {
    success: false,
    message: "Error occurred while logging in. Please try again.",
  };

  try {
    const body = ctx.request.body({ type: "json" });
    const request = (await body.value) as CreateProfileRequest;

    if (!request.accessCode) {
      ctx.response.status = Status.BadRequest;
      ctx.response.body = errorResponse;
      return;
    }

    const response = await createProfile(request);
    handleResponse(ctx, response);
  } catch (_err) {
    ctx.response.status = Status.InternalServerError;
    ctx.response.body = errorResponse;
  }
}

export default {
  create,
  getProfile,
};
