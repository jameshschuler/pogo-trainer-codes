import { PrismaClient } from "../generated/client/deno/edge.ts";

// TODO: need to set up local and migrations?
const prisma = new PrismaClient();

export default prisma;