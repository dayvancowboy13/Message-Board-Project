const pool = require('./pool');

exports.getAll = async function () {
    console.log('Querying for all rows...');
    const { rows } = await pool.query(`SELECT * FROM messages`);
    return rows;
}

