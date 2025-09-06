import Fastify from "fastify"
import { getGreeting } from "#lib/greeting.ts";

const app = Fastify({
  logger: true
});

app.get("/", async function handler (request) {
  // @ts-expect-error - TODO make this typesafe
  const name = request?.query?.name;

  return { message: getGreeting(name) };
});

export { app };