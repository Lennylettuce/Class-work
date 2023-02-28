var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
  //renderTodos function will manip DOM to create a list of things
  //the user inputs in the section given in the original html
  
function renderTodos() {
  // TODO: Describe the functionality of the following two lines
   //DOM manip to get/set text area from 
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
    //the for loop runs through til user input done
    //creates list element for each of user input, loop closed when done .length
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
  //init stored function to parse back string to original object when 
function init() {
  // TODO: What is the purpose of the following line of code?
    //get stringed item back to object 
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
    //if there's input here from user then store it in storedTodos
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
    //then if theres info in that var it'll complete function below before end of code
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
    //strings input stored in todos 
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
  //this one adds functionality to submit button
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
    //if there's no input then return nothing to user
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  //places info in todo text area or nothing
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
    //helper functions that do one task they are made higher up in code
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
  //adds functionality to this 
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
    //.matches does what it says 
    //.splice takes items from or into specific arrays
    //get info from "data-index" which was defined earlier in js code, calls to new li made in DOM by user input check line 26
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
      //below two functions basically do what they say they do
      //so if the statement above is 
    storeTodos();
    renderTodos();
  }
});

init();
