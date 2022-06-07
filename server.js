require('dotenv').config();
const mongoose = require('mongoose');
const http = require('http');
const app = require('./app/app');
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose
  .connect('mongodb://localhost:27017/pollDb', { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
