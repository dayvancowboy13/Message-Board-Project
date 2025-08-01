const express = require('express');
const app = express();
const path = require('node:path');
const assetsPath = path.join(__dirname, "public");
require("dotenv").config();
console.log(process.env.PORT);
app.use(express.static(assetsPath));

console.log(process.env);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


const indexRouter = require('./routes/indexRouter');

const PORT = Number(process.env.PORT) || 3000;

app.use('/', indexRouter);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on Port ${PORT} and host 0.0.0.0`)
});