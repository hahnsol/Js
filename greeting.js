const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js_greetings");

const user_LS = "user";
const showing_CL = "showing";

function saveName(text) {
    localStorage.setItem(user_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const value = input.value;
    paintGreeting(value);
    saveName(value);
}

function askForName() {
    form.classList.add(showing_CL);
 //   greeting.classList.remove(showing_CL);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(showing_CL);
    greeting.classList.add(showing_CL);
    greeting.innerText = `welcome ${text}`;

}

function loadName() {
    const user = localStorage.getItem(user_LS);
    if(user === null) {
        askForName();
    } else {
        paintGreeting(user);
        }
}

function init() {
    loadName();
}

init();