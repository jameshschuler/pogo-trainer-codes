import { logError } from "@/handlers/commands/createLog.ts";

export async function validateApiKey(requestApiKey: string | null): Promise<boolean> {
  const validApiKey = Deno.env.get("API_KEY");
  if (!validApiKey || validApiKey === "") {
    await logError("Valid API key not found.", {
      invalidApiKey: requestApiKey,
    });
    return false;
  }

  if (requestApiKey === null || requestApiKey !== validApiKey) {
    await logError("Missing or invalid API key", {
      invalidApiKey: requestApiKey,
    });
    return false;
  }

  return true;
}
