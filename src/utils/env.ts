import { load } from "https://deno.land/std/dotenv/mod.ts";

export const configData = await load({
  export: true,
  allowEmptyValues: true,
});
