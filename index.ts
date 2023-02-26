import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { Application, Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import { log } from "./src/commands/createLog.ts";
import { syncTrainerCodes } from "./src/commands/syncTrainerCodes.ts";
import { validateApiKey } from "./src/utils/auth.ts";

const app = new Application();
app.use(oakCors());

const router = new Router();

// Log request information
app.use(async (ctx, next) => {
  await next();
  await log(
    "Info",
    "Request",
    `${ctx.request.method} ${ctx.request.url}`,
    {
      headers: JSON.stringify(ctx.request.headers),
    },
  );
});

router
  .get("/api/health", (ctx: RouterContext<string>) => {
    ctx.response.body = {
      status: "success",
      message: "Welcome to PoGo Trainer Codes",
    };
  })
  .post("/api/trainer-codes/sync", async (ctx) => {
    try {
      const isValidApiKey = await validateApiKey(ctx.request.headers.get("X-API-KEY"));
      if (!isValidApiKey) {
        ctx.response.status = 401;
        return;
      }

      const response = await syncTrainerCodes();

      ctx.response.body = response;
      ctx.response.status = response.success ? 200 : 500;
    } catch (_e) {
      console.error(_e);
      // TODO: log error
      ctx.response.body = {
        success: false,
        message: "Unable to sync trainer codes.",
      };
      ctx.response.status = 500;
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
