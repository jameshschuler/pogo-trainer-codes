import createProfile from "@/handlers/commands/createProfileHandler.ts";
import { CreateProfileRequest } from "@/types/requests/createProfileRequest.ts";
import { handleResponse } from "@/utils/common.ts";
import { Status } from "oak";
import { RouterContext } from "router";

export function getProfile(ctx: RouterContext<string>) {
  ctx.response.body = {
    message: "hello",
  };
}

export async function create(ctx: RouterContext<string>) {
  try {
    const body = ctx.request.body({ type: "json" });
    const request = (await body.value) as CreateProfileRequest;

    if (!request.accessCode) {
      // return error
      return;
    }

    const response = await createProfile(request);
    handleResponse(ctx, response);
  } catch (_err) {
    ctx.response.status = Status.InternalServerError;
    ctx.response.body = {
      success: false,
      message: "Error occurred while logging in. Please try again.",
    };
  }
}

export default {
  create,
  getProfile,
};
