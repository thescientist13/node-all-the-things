import Fastify from "fastify";
import { getGreeting } from "#lib/greeting.ts";
import { database } from "#lib/db.ts";

const app = Fastify({
  logger: true,
});

app.get("/", async function handler(request) {
  // @ts-expect-error - TODO make this typesafe
  const name = request?.query?.name;

  return { message: getGreeting(name) };
});

app.get("/data", async function handler(request) {
  // Create a prepared statement to read data from the database.
  const query = database.prepare('SELECT * FROM data ORDER BY key');
  // Execute the prepared statement and log the result set.
  const result = query.all();

  return result;
});

export { app };

