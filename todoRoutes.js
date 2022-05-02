let path = require('path');
let express = require('express');
let todoAPP = express.Router();

/*let todoList = [

    {
        name: 'Do Some Work',
        completed: false,
        id: 1
    },

]*/

todoAPP.get('/', function (req, res){
    res.sendFile(path.join(__dirname,'views', 'todo', 'index.html'));
});

todoAPP.get('/list', function (req, res){

    if(Array.isArray(todoList) && todoList.length ){
        res.json(todoList);
        res.status(200);
    }
    else{
        res.status(500);
        res.send("Oops something went wrong");
    }
    
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

todoAPP.post('/remove', function (req, res){
    console.log('Deleting a todo');
    var index = req.body.idRemove - 1;
    todoList.splice(index,1);
    res.redirect(req.baseUrl + '/list');
});

todoAPP.post('/update', function (req, res){
    console.log('Updating a todo');

    var index = req.body.idUpdate - 1; // subtract 1 for 0 indexing.
    todoList[index].completed = true;
    res.redirect(req.baseUrl + '/list');
});

module.exports = todoAPP;