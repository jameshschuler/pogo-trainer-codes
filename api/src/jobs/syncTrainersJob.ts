import { Cron } from "@/deps.ts";
import { syncTrainerCodes } from "@/handlers/commands/syncTrainerCodes.handler.ts";

export const start = () => {
  return new Cron("0 */12 * * *", async () => {
    console.log("Running sync trainers job");
    const response = await syncTrainerCodes();
    console.log(response.data);
  });
};
