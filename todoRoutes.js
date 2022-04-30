let path = require('path');
let express = require('express');
let todoAPP = express.Router();

let todoList = [

    {
        name: 'Do Some Work',
        completed: false,
        number: 1
    },

]

todoAPP.get('/', function (req, res){
    res.send('Hello World!');
});

module.exports = todoAPP;