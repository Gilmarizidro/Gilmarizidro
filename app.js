//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event listeners
todoButton.addEventListener('clik', addTodo )

//functions
function addTodo(Event){
    //prevent form from subbmiting
   Event.preventDefault();
}