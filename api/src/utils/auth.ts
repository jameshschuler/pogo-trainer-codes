import { logError } from "@/handlers/commands/createLog.ts";
import { env } from "./env.ts";

export async function validateApiKey(requestApiKey: string | null): Promise<boolean> {
  const validApiKey = env["API_KEY"];
  if (!validApiKey || validApiKey === "" || requestApiKey === null || requestApiKey !== validApiKey) {
    await logError("Missing or invalid API key", { "invalidApiKey": requestApiKey });
    return false;
  }

  return true;
}
