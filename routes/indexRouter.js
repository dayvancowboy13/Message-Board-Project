const { Router } = require('express');
const path = require('node:path');

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: 1
    },
    {
        text: "Hellow world!",
        user: "Charles",
        added: new Date(),
        id: 2
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

indexRouter.get('/new', (req, res) => {
    res.render('new');
});

indexRouter.post('/new', (req, res) => {
    console.log('Received post request!');
    // console.log(req.body);
    messages.push({ text: req.body.messageBody, user: req.body.messageUser, added: new Date(), id: messages.length + 1 });
    res.redirect('/');
});

indexRouter.get('/message/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(`The function id is ${id}`)
    let message = messages.find((message) => {
        console.log(message.id)
        if (message.id === id) {
            console.log('Found the matching message!');
            return message;
        }
    });
    console.log(message);

    console.log('Display message details');
    res.render('message', { message: message, id: id });
})

module.exports = indexRouter;