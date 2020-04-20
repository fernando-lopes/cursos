const port = 3003;

const express = require('express');
const server = express();
const cors = require('cors');

const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extend: true }));
server.use(bodyParser.json());
server.use(cors());

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}`);
});

module.exports = server;
