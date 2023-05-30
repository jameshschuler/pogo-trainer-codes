import { validateAccessToken, validateUserId } from "@/middleware/auth.middleware.ts";
import { handleError } from "@/middleware/handleError.ts";
import { logRequest } from "@/middleware/logRequest.ts";
import { setupRoutes } from "@/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { CookieStore, Session } from "https://deno.land/x/oak_sessions/mod.ts";
import { Application, Router } from "oak";

type AppState = {
  session: Session;
};

const app = new Application<AppState>();

export const router = new Router<AppState>();
const store = new CookieStore(Deno.env.get("COOKIE_STORE_SECRET")!);
app.use(Session.initMiddleware(store, {
  cookieSetOptions: {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  },
}));

app.use(oakCors({
  origin: ["http://localhost:3000", "https://pogotrainerhub.com", "https://pogotrainerhub.app"],
  credentials: true,
}));

// Log request information
// TODO: type errors
app.use(logRequest);
app.use(handleError);
app.use(validateAccessToken);
app.use(validateUserId);

setupRoutes(router);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
