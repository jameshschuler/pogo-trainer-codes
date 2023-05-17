import { ProfileWithTrainer } from "@/types/profile.ts";
import { getTrainerByUsername } from "../queries/getTrainerByUsername.handler.ts";
import { createProfile } from "./createProfile.handler.ts";
import { getDiscordProfile } from "./getDiscordProfile.handler.ts";

export async function syncProfile(accessToken: string): Promise<ProfileWithTrainer> {
  const meResponse = await getDiscordProfile(accessToken!);

  let profile: ProfileWithTrainer = null;

  if (meResponse) {
    const trainerId = await getTrainerByUsername(meResponse.username);
    profile = await createProfile(meResponse, trainerId);
  }

  return profile;
}
