const { Router } = require('express');
const path = require('node:path');

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hellow world!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

module.exports = indexRouter;