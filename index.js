let path = require('path');
let express = require('express');
const { Console } = require('console');
let app = express();
let todoAPP = require('./todoRoutes');

app.use('/', todoAPP);

app.listen(8080);
console.log("Express server on port 8080!!!");