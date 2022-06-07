const express = require('express');
const middlewares=require('./middlewares');


const app = express();
app.use(middlewares);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');



module.exports = app;