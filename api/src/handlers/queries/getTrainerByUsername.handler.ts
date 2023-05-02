import prisma from "@prisma";

export default async function handle(username: string): Promise<number | undefined> {
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
