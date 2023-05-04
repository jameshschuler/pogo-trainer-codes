import { RouterContext } from "oak";

export async function handleError(ctx: RouterContext<string>, next: () => Promise<void>) {
  try {
    await next();
  } catch (err) {
    // TODO: handle various errors?
    console.error("ERROR!", err);
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
}
