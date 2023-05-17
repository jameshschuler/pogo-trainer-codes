import { ProfileWithTrainer } from "@/types/profile.ts";
import { MeResponse } from "@/types/response/meResponse.ts";
import prisma from "@prisma";

export async function createProfile(
  me: MeResponse,
  trainerId?: number,
): Promise<ProfileWithTrainer> {
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
    include: {
      trainer: true,
    },
  });

  return profile;
}
