import { Profile, Trainer, TrainerAlt } from "../../generated/client/deno/index.d.ts";
import { TrainerAltResponse } from "./trainer.ts";

export interface ProfileResponse {
  profileId: number;
  username: string;
  userId: string;
  trainerName?: string;
  trainerCode?: string;
  trainerAlts: TrainerAltResponse[];
}

export type ProfileWithTrainer = Profile & { trainer: Trainer | null } | null;

export type ProfileWithRelatedEntities =
  | (Profile & {
    trainer:
      | (Trainer & {
        alts: TrainerAlt[];
      })
      | null;
  })
  | null;
