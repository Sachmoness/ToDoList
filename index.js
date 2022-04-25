let path = require('path');
let express = require('express');
const { Console } = require('console');
let app = express();

app.get('/', function (req, res){
    res.send('Hello World!');
});

app.listen(8080);
console.log("Express server on port 8080!!!");