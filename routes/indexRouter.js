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

indexRouter.get('/new', indexController.getNew);

indexRouter.post('/new', indexController.createNewMessage);

indexRouter.get('/message/:id', indexController.getMessage)

module.exports = indexRouter;