const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send('You are accessing the home page!')
});

module.exports = indexRouter;