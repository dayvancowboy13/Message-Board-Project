const { Client } = require('pg');

const SQL = `INSERT INTO messages (author, message, date_added) VALUES ('Chris', 'Wow! I have a new database!', CURRENT_DATE)`;
// const SQL = 'INSERT INTO  "my-table" (id, price) VALUES (2, 55)';
// const SQL = `CREATE TABLE IF NOT EXISTS new_table (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   myNum INT)`;

// const SQL = `CREATE TABLE IF NOT EXISTS messages(
// id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
// author varchar(20),
// message varchar(200),
// date_added DATE)
// `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  // await client.query(SQL);
  let { rows } = await client.query(`SELECT * FROM messages`);
  console.log(rows);
  await client.end();
  console.log("done");
}

main();