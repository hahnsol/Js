const ToDoForm = document.querySelector(".js_ToDoForm"),
    ToDoInput = ToDoForm.querySelector("input"),
    ToDoList = doucument.querySelector(".js_ToDoList");

function paintTodo(text) {


}

function handleSubmit(event) {
    event.preventDefault();
    const TodoValue = ToDoInput.value;
    paintTodo(TodoValue);
    ToDoInput.value = "";
}    

function loadToDO() {

}

function init() {
    loadToDO();
    ToDoForm.addEventListener("submit", handleSubmit);
}

init();