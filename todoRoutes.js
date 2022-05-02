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

    if(typeof todoList != "undefined" && todoList != null){
        res.json(todoList);
        res.status(200);
    }
    else{
        res.status(500);
        res.send("Oops something went wrong");
    }
    
});

todoAPP.post('/add', function(req,res){

    if(typeof todoList != "undefined" && todoList != null && req.body.todo != "I'm lazy"){
        let newTodo = {
            name: req.body.todo,
            completed: false,
            id: todoList.length+1
        }
    
        todoList.push(newTodo);
        res.redirect(req.baseUrl + '/list');

        console.log('Adding a todo');

        res.status(200);
    }else{
        res.status(500);
        res.send("Oops something went wrong");
    }
    

   
});

todoAPP.post('/remove', function (req, res){

    var index = req.body.idRemove - 1;

    if(typeof todoList != "undefined" && todoList != null && todoList.length > index){ // check if the index is not larger than array size.
        console.log('Deleting a todo');
        
        todoList.splice(index,1);
        res.redirect(req.baseUrl + '/list');
    }
    else{
        res.status(500);
        res.send("Oops something went wrong");
    }
  
});

todoAPP.post('/update', function (req, res){


    var index = req.body.idUpdate - 1; // subtract 1 for 0 indexing.

    if(typeof todoList != "undefined" && todoList != null && todoList.length > index){
        console.log('Updating a todo');
        todoList[index].completed = true;
        res.redirect(req.baseUrl + '/list');
    }
    else{
        res.status(500);
        res.send("Oops something went wrong");
    }
    
});

module.exports = todoAPP;