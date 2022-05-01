let path = require('path');
let express = require('express');

const { Console } = require('console');
let app = express();

let bodyParser = require('body-parser');


let todoAPP = require('./todoRoutes.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/todos', todoAPP);

app.listen(8080);
console.log("Express server on port 8080!!!");