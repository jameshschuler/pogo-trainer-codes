import { syncProfile } from "@/handlers/commands/syncProfile.handler.ts";
import { getProfile } from "@/handlers/queries/getProfile.handler.ts";
import { ProfileResponse } from "@/types/profile.ts";
import { createResponse, handleResponse } from "@/utils/response.ts";
import { RouterContext } from "router";

async function get(ctx: RouterContext<string>) {
  const userId = await ctx.state.session.get("userId");
  const authHeader = ctx.request.headers.get("Authorization");

  let profile = await getProfile(userId);

  if (!profile) {
    const accessToken = authHeader?.split(" ")[1];
    const userId = await syncProfile(accessToken!);
    if (userId) {
      profile = await getProfile(userId);
    }
  }

  const { id, user_id, username, trainer } = profile!;
  handleResponse(
    ctx,
    createResponse<ProfileResponse>({
      profileId: id,
      userId: user_id,
      username,
      trainerCode: trainer?.trainer_code,
      trainerName: trainer?.trainer_name,
    }),
  );
}

export default {
  getProfile: get,
};
