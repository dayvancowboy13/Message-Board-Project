const pool = require('./pool');

exports.getAll = async function () {
    const { rows } = pool.query(`SELECT * FROM messages`);
    return rows;
}

