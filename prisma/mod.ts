import { PrismaClient } from "../generated/client/deno/edge.ts";

// TODO: need to set up local and migrations?
export const prisma = new PrismaClient();