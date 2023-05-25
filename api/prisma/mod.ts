import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
const prisma = new PrismaClient();

const trainerWithAlts = Prisma.validator<Prisma.TrainerArgs>()({
    include: { alts: true },
  });

export type TrainerWithAlts = Prisma.TrainerGetPayload<typeof trainerWithAlts>

export {
  prisma
};
