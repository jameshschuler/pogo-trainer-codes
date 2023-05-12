import prisma from "@prisma";

export async function getTrainerByUsername(username: string): Promise<number | undefined> {
  const trainer = await prisma.trainer.findFirst({
    where: {
      username: {
        equals: username,
      },
    },
    select: {
      id: true,
    },
  });

  return trainer?.id;
}
