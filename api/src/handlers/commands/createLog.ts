import prisma from "@prisma";

export async function log(level: string, logType: string, message: string, meta?: any, requestId?: string) {
  await prisma.log.create({
    data: {
      level,
      log_type: logType,
      message,
      meta: meta ? JSON.stringify(meta) : JSON.stringify("{}"),
      request_id: requestId,
    },
  });
}

export async function logError(message: string, meta?: any, requestId?: string) {
  await log("Error", "Internal", message, meta, requestId);
}
