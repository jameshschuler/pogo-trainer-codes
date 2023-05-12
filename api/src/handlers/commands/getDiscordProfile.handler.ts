import { MeResponse } from "@/types/response/meResponse.ts";

export async function getDiscordProfile(accessToken: string): Promise<MeResponse | null> {
  try {
    const meResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${accessToken}`,
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
