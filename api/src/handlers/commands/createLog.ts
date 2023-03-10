import prisma from "@prisma";

export async function log(level: string, logType: string, message: string, meta?: any) {
  await prisma.log.create({
    data: {
      level,
      log_type: logType,
      message,
      meta: meta ? JSON.stringify(meta) : JSON.stringify("{}"),
    },
  });
}

export async function logError(message: string, meta?: any) {
  await log("Error", "Internal", message, meta);
}
