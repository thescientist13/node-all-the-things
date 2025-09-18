import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(':memory:');

// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);

// Create a prepared statement to insert data into the database.
const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');

// Execute the prepared statement with bound values.
insert.run(1, 'hello');
insert.run(2, 'world');

export { database };
