const toDoForm = document.querySelector(".js_ToDoForm"),
    toDoInput = toDoForm.querySelector(".input"),
    toDoList = document.querySelector(".js_ToDoList");

const TODO_LS = "ToDo";
let ToDo = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = ToDo.filter(function(todo) {
        return todo.id !== parseInt(li.id); 
    });
    ToDo = cleanToDo;
    saveToDo(); 
}

function saveToDo () {
    localStorage.setItem(TODO_LS, JSON.stringify(ToDo));
} 

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = ToDo.length + 1 ;
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    }
    ToDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const ToDoValue = toDoInput.value;
    paintTodo(ToDoValue);
    toDoInput.value = "";
}

function loadtoDos() {
    const loadedToDo = localStorage.getItem(TODO_LS);
    if(loadedToDo !== null) {
       const parsedToDo = JSON.parse(loadedToDo); 
       parsedToDo.forEach(function(doList) {
           paintTodo(doList.text);
       });
    } 
}

function init() {
    loadtoDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();    