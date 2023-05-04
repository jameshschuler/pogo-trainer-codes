import { handleError } from "@/middleware/handleError.ts";
import { logRequest } from "@/middleware/logRequest.ts";
import { setupRoutes } from "@/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Application, Router } from "oak";

const app = new Application();

export const router = new Router();

app.use(oakCors());

// Log request information
// TODO: type errors
app.use(logRequest);
app.use(handleError);

setupRoutes(router);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
