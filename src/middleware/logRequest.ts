import { log } from "@/handlers/commands/createLog.ts";

export async function logRequest(ctx, next) {
  await next();
  await log(
    "Info",
    "Request",
    `${ctx.request.method} ${ctx.request.url}`,
    {
      headers: JSON.stringify(ctx.request.headers),
    },
  );
}
