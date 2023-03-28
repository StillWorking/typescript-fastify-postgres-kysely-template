import { FastifyReply } from "fastify"
import { ERROR500 } from "./Constants";

export function handleServerError(reply: FastifyReply, error: any) {
  return reply.status(ERROR500.statusCode).send(ERROR500);
}