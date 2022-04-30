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
    res.sendFile(path.join(__dirname,'views', 'todo', 'index.html'));
});

todoAPP.get('/list', function (req, res){
    res.json(todoList);
});

todoAPP.post('/add', function(req,res){
    console.log('Adding a todo');
    todoList.push(req.body.todo);
    res.redirect(req.baseUrl + '/list');
});

module.exports = todoAPP;