const db = require('../db/queries');

exports.getAllContent = async function (req, res) {
    console.log('retrieving all columns and rows currently in the db...');
    const content = await db.getAll();
    console.log(content);
    res.render('index', {
        messages: content,
    })
}

exports.createNewMessage = async function (req, res) {
    console.log('Submitting new message...');
    await db.insertMessage(
        req.body.messageUser,
        req.body.messageBody
    );
    // messages.push({ text: req.body.messageBody, user: req.body.messageUser,
    //  added: new Date(), id: messages.length + 1 });

    res.redirect('/');

}