import { logError } from "@/handlers/commands/createLog.handler.ts";
import { compare, genSalt, hash } from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";

export async function hashValue(value: string): Promise<string> {
  const salt = await genSalt(5);
  return hash(value, salt);
}

export function compareValues(requestValue: string, hashedValue: string): Promise<boolean> {
  return compare(requestValue, hashedValue);
}

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
