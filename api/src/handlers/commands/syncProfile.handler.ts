import { getTrainerByUsername } from "../queries/getTrainerByUsername.handler.ts";
import { createProfile } from "./createProfile.handler.ts";
import { getDiscordProfile } from "./getDiscordProfile.handler.ts";

export async function syncProfile(accessToken: string): Promise<string | null> {
  const meResponse = await getDiscordProfile(accessToken!);

  if (meResponse) {
    const trainerId = await getTrainerByUsername(meResponse.username);
    return createProfile(meResponse, trainerId);
  }

  return null;
}
