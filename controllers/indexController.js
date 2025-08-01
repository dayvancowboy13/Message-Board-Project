const db = require('../db/queries');

exports.getAllContent = async function (req, res) {
    console.log('retrieving all columns and rows currently in the db...');
    const content = await db.getAll();
    console.log(content);
}