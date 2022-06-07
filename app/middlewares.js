const cors = require('cors');
const express = require('express');
const morgan =require('morgan');

const middlewares =[morgan('dev'),cors(),express.json(),express.urlencoded({extended:true})];

module.exports = middlewares
