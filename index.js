let path = require('path');
let express = require('express');
const { Console } = require('console');
let app = express();
let todoAPP = require('./todoRoutes');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', todoAPP);

app.listen(8080);
console.log("Express server on port 8080!!!");