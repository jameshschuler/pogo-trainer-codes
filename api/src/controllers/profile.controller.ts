import { ProfileResponse } from "@/types/profile.ts";
import { createResponse, handleResponse } from "@/utils/response.ts";
import prisma from "@prisma";
import { RouterContext } from "router";
import { syncProfile } from "../handlers/commands/syncProfile.handler.ts";

async function getProfile(ctx: RouterContext<string>) {
  const userId = await ctx.state.session.get("userId");
  const authHeader = ctx.request.headers.get("Authorization");

  // TODO: need to include trainer alts as well
  let profile = await prisma.profile.findFirst({
    where: {
      user_id: {
        equals: userId,
      },
    },
    include: {
      trainer: true,
    },
  });

  if (!profile) {
    const accessToken = authHeader?.split(" ")[1];
    profile = await syncProfile(accessToken!);
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
  getProfile,
};
