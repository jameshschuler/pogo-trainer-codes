import { prisma } from "@/deps.ts";

export async function createTrainer(username: string): Promise<number | undefined> {
  const trainer = await prisma.trainer.create({
    data: {
      username,
      trainer_code: "",
      trainer_name: "",
    },
    select: {
      id: true,
    },
  });

  return trainer.id;
}
