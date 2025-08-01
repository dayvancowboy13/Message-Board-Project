const { Client } = require('pg');

const SQL = `
INSERT INTO new_messages (id, user, message, date_added) 
VALUES
  (10, 'Chris', 'Wow! I have a new database!', 2025-07-31),
`;

const pullSQL = 'SELECT * FROM messages'

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.argv[2],
    });
    await client.connect();
    // await client.query(SQL);
    let { rows } = await client.query(pullSQL);
    console.log(rows);
    await client.end();
    console.log("done");
}

main();