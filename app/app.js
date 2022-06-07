const express = require('express');
const {notFOundHandler,errorHandler} = require('./error');



const app = express();
app.use(require('./middlewares'));
app.use(require('./routes'));
app.use([notFOundHandler,errorHandler]);
// app.use(errorHandler);
app.set('view engine','ejs');




module.exports = app;