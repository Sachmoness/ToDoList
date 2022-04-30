let path = require('path');
let express = require('express');
let todoAPP = express.Router();

todoAPP.get('/', function (req, res){
    res.send('Hello World!');
});

module.exports = todoAPP;