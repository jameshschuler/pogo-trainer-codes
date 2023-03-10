import { load } from "https://deno.land/std/dotenv/mod.ts";

export const env = await load({
  export: true,
  allowEmptyValues: true,
});
