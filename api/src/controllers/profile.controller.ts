import { syncProfile } from "@/handlers/commands/syncProfile.handler.ts";
import { ProfileResponse } from "@/types/profile.ts";
import { createResponse, handleResponse } from "@/utils/response.ts";
import prisma from "@prisma";
import { RouterContext } from "router";

async function getProfile(ctx: RouterContext<string>) {
  const userId = await ctx.state.session.get("userId");
  const authHeader = ctx.request.headers.get("Authorization");

  let profile = await prisma.profile.findFirst({
    where: {
      user_id: {
        equals: userId,
      },
    },
  });

  if (!profile) {
    const accessToken = authHeader?.split(" ")[1];
    profile = await syncProfile(accessToken!);
  }

  const { id, user_id, username } = profile!;
  handleResponse(
    ctx,
    createResponse<ProfileResponse>({
      profileId: id,
      userId: user_id,
      username,
    }),
  );
}

export default {
  getProfile,
};
