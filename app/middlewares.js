const cors = require('cors');
const morgan =require('morgan');

const middlewares =[cors(),morgan('dev')];

module.exports = middlewares
