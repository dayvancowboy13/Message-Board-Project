const db = require('../db/queries');

exports.getAllContent = async function (req, res) {
    console.log('retrieving all columns and rows currently in the db...');
    const content = await db.getAll();
    console.log(content);
    res.render('index', {
        messages: content,
    })
}

exports.getNew = (req, res) => {
    res.render('new');
}

exports.createNewMessage = async function (req, res) {
    console.log('Submitting new message...');
    await db.insertMessage(
        req.body.messageUser,
        req.body.messageBody
    );
    res.redirect('/');
}

exports.getMessage = async function (req, res) {
    const id = Number(req.params.id);
    // let message = messages.find((message) => (message.id === id));
    let result = await db.getMessage(id);
    console.log(result.author);
    console.log(result.message);
    res.render('message', {
        message: {
            user: result[0].author,
            text: result[0].message,
            added: String.toString(result[0].date_added).slice(0, 9),
        }, id: id
    });
}