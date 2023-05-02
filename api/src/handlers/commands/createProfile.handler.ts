import getTrainerByUsername from "@/handlers/queries/getTrainerByUsername.handler.ts";
import { ApiResponse } from "@/types/common.ts";
import { CreateProfileRequest } from "@/types/requests/createProfileRequest.ts";
import { ProfileResponse } from "@/types/response/createProfileResponse.ts";
import { MeResponse } from "@/types/response/meResponse.ts";
import prisma from "@prisma";

export default async function handle(
  request: CreateProfileRequest,
): Promise<ApiResponse<ProfileResponse>> {
  const meResponse = await getDiscordProfile(request.accessCode);

  if (meResponse === null) {
    return {
      message: "Unable to get Discord profile.",
      success: false,
    };
  }

  const trainerId = await getTrainerByUsername(meResponse.username!);
  if (!trainerId) {
    return {
      message: "No trainer record found.",
      success: false,
    };
  }

  const { id, username, avatar, avatar_decoration, display_name, global_name, locale } = meResponse;
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

  return {
    data: {
      profileId: profile.id,
      username: profile.username,
      userId: profile.user_id,
    },
    success: true,
  };
}

async function getDiscordProfile(accessCode: string): Promise<MeResponse | null> {
  try {
    const meResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${accessCode}`,
      },
    });

    if (meResponse.status !== 200) {
      return null;
    }

    const data = (await meResponse.json()) as MeResponse;
    return data;
  } catch (_err) {
    return null;
  }
}
