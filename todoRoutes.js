let path = require('path');
let express = require('express');
let todoAPP = express.Router();

let todoList = [

    {
        name: 'Do Some Work',
        completed: false,
        id: 1
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

    let newTodo = {
        name: req.body.todo,
        completed: false,
        id: todoList.length+1
    }

    todoList.push(newTodo);
    res.redirect(req.baseUrl + '/list');
});

todoAPP.post('/remove/:id', function (req, res){
    console.log('Deleting a todo');
    todoList.splice(req.params.id,1);
    res.redirect(req.baseUrl + '/list');
});

module.exports = todoAPP;