# ToDoList
REST API TODO application

## Description of the application
The application makes use of a RESTful (Representational State Transfer) interface to service a todo list.
The RESTful interface alllows for CRUD (Create, Read, Update and Delete) to be applied on the todo list.
The todo list is stored in the application memory in an array of objects where each todo object has 3 members: name, id and completed status.
Normally our data would be stored in a database and this webpage would be hosted on a server, but using an array was sufficient to test the api.
The RESTful api made would allow the webpage to comminicate with the storage server asynchronousely and perform CRUD on the data. It essentially provides the developer with an interface to edit and acess the data.


## How to build and run the code locally
* Ensure Node, Express and body-parser are installed.
    * npm install express and npm install body-parser.
* Run the application with:
    * node index.js (in terminal with the file location open).
    * Go to the adress localhost:8080/todos in your browser (this is the homepage and is to be used to test the api).


## Design Choices
* Since the front-end was made using HTML, the delete and put routes were made as posts.
* The front end was made using html forms to easily test the api manually.
* The index was used as an input for deleting and editing a todo item as this was an easy way to test the funcitonality. E.g. if the user enters 3 the api should edit/delete the third todo item.


## Considerations for Future
* By creating a front-end the api deviated from the required routes given as posts had to be used.
* In future a Unit testing framewrok such as Jest should be implemeted during development.
* Some more checks to ensure the user can't add duplicate todos can be added.
* A more user friendly interface can be made.
* Some consideration be place on the id of a todo item, so if a the thrid item is deleted, then the fourth item now becomes the third item and its id should reflect this so we would be updating/deleting by id rather than array poistion.
