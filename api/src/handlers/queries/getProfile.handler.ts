import { ProfileWithRelatedEntities } from "@/types/profile.ts";
import prisma from "@prisma";

export async function getProfile(userId: string): Promise<ProfileWithRelatedEntities> {
  const profile = await prisma.profile.findFirst({
    where: {
      user_id: {
        equals: userId,
      },
    },
    include: {
      trainer: {
        include: {
          alts: true,
        },
      },
    },
  });

  return profile;
}
