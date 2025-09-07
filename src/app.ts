import Fastify from "fastify";
import { getGreeting } from "#lib/greeting.ts";

const app = Fastify({
  logger: true,
});

app.get("/", async function handler(request) {
  // @ts-expect-error - TODO make this typesafe
  const name = request?.query?.name;

  return { message: getGreeting(name) };
});

app.get("/images", async function handler(request) {
  // const response = await fetch('')
});

export { app };

