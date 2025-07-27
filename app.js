const express = require('express');
const app = express();
const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


const indexRouter = require('./routes/indexRouter');
// const newMessageRouter = require('./routes/newMessageRouter');


const PORT = 3000;

app.use('/', indexRouter);
// app.use('/new', newMessageRouter);


app.listen(PORT, 'localhost');