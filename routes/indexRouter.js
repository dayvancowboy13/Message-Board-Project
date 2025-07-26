const { Router } = require('express');

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
    res.send('You are accessing the home page!')
});

module.exports = indexRouter;