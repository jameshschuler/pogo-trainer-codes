import { logError } from "@/handlers/commands/createLog.handler.ts";
import { RouterContext } from "oak";

export async function handleError(ctx: RouterContext<string>, next: () => Promise<void>) {
  try {
    await next();
  } catch (err) {
    await logError("Application Error", { ...err, message: err.message });

    ctx.response.status = 500;
    ctx.response.body = { message: "Something went wrong processing your request. Please try again later." };
  }
}
