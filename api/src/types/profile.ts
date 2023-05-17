import { Profile, Trainer } from "../../generated/client/deno/index.d.ts";

export interface ProfileResponse {
  profileId: number;
  username: string;
  userId: string;
  trainerName?: string;
  trainerCode?: string;
}

export type ProfileWithTrainer = Profile & { trainer: Trainer | null } | null;
