import { MeResponse } from "@/types/response/meResponse.ts";
import prisma from "@prisma";
import { Profile } from "../../../generated/client/deno/index.d.ts";

export async function createProfile(
  me: MeResponse,
  trainerId?: number,
): Promise<Profile | null> {
  const { id, username, avatar, avatar_decoration, display_name, global_name, locale } = me;
  const profile = await prisma.profile.upsert({
    where: {
      trainer_id: trainerId,
    },
    create: {
      username: username!,
      trainer_id: trainerId,
      avatar,
      avatar_decoration,
      display_name,
      global_name,
      locale,
      user_id: id,
    },
    update: {
      avatar,
      avatar_decoration,
      display_name,
      global_name,
      locale,
      updated_at: new Date(),
    },
  });

  return profile;
}
