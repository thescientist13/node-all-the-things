import { app } from "#app.ts";

const port = parseInt(process.env.PORT) ?? 8080;

// Run the server!
try {
  await app.listen({ port });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}

