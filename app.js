const express = require('express');
const app = express();
const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const indexRouter = require('./routes/indexRouter');

const PORT = 3000;

app.use('/', indexRouter);

app.listen(PORT, 'localhost');