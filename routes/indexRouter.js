const { Router } = require('express');
const path = require('node:path');
const indexController = require('../controllers/indexController');

const indexRouter = Router();

const messages = [
    {
        text: "Hello? Is this thing on?",
        user: "Armando",
        added: new Date(),
        id: 1
    },
    {
        text: "I just need a break...",
        user: "Charles",
        added: new Date(),
        id: 2
    },
    {
        text: "Bing Chilling!",
        user: "John Cena",
        added: new Date(),
        id: 3
    },
];

indexRouter.get('/', indexController.getAllContent);

indexRouter.get('/new', (req, res) => {
    res.render('new');
});

indexRouter.post('/new', indexController.createNewMessage);

indexRouter.get('/message/:id', (req, res) => {
    const id = Number(req.params.id);
    let message = messages.find((message) => (message.id === id));
    res.render('message', { message: message, id: id });
})

module.exports = indexRouter;