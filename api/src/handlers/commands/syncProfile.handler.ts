import { getTrainerByUsername } from "../queries/getTrainerByUsername.handler.ts";
import { createProfile } from "./createProfile.handler.ts";
import { createTrainer } from "./createTrainer.handler.ts";
import { getDiscordProfile } from "./getDiscordProfile.handler.ts";

export async function syncProfile(accessToken: string): Promise<string | null> {
  const meResponse = await getDiscordProfile(accessToken!);

  if (meResponse) {
    let trainerId = await getTrainerByUsername(meResponse.username);
    if (!trainerId) {
      trainerId = await createTrainer(meResponse.username);
    }

    return createProfile(meResponse, trainerId);
  }

  return null;
}
