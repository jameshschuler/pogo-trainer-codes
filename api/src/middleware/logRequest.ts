import { log } from "@/handlers/commands/createLog.ts";
import { RouterContext } from "oak";

export async function logRequest(ctx: RouterContext<string>, next) {
  const requestId = crypto.randomUUID();
  ctx.state.requestId = requestId;

  await next();
  await log(
    "Info",
    "Request",
    `${ctx.request.method} ${ctx.request.url}`,
    {
      headers: JSON.stringify(ctx.request.headers),
    },
    requestId
  );
}
