import { RouterContext } from "oak";

export async function handleError(ctx: RouterContext<string>, next: () => Promise<void>) {
  try {
    await next();
  } catch (err) {
    // TODO: handle various errors?
    console.error("ERROR!", err);
    ctx.response.status = 500;
    // TODO: should return err.message in dev mode?
    ctx.response.body = { message: "Something went wrong processing your request. Please try again later." };
  }
}
