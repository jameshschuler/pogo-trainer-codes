import { prisma } from "../db.ts";

export async function log(level: string, logType: string, message: string, meta?: any) {
  await prisma.log.create({
    data: {
      level,
      log_type: logType,
      message,
      meta: meta ?? JSON.parse("{}"),
    },
  });
}

export async function logError(message: string, meta?: any) {
  await log("Error", "Internal", message, meta);
}
