const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout-button");
const toDoList = document.querySelector("#todo-list");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";


function hadleLinkClick(event) {
    event.preventDefault();
}

function loginButtonClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USER_NAME, username);
    paintGreetings(username);
}

function paintGreetings(saveUserName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${saveUserName}`;
    logOut.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

function logOutButton() {
    localStorage.removeItem(USER_NAME);
    logOut.classList.add(HIDDEN_CLASSNAME);
    console.log("hi");
    greeting.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    main();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);   
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);
}

function handToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
    // console.log(toDoInput.value);
}

function main() {
    const saveUserName = localStorage.getItem(USER_NAME);
    if (saveUserName === null) {
        //show the form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", loginButtonClick);
    } else {
        //show the h1
        paintGreetings(saveUserName);
        logOut.addEventListener("click", logOutButton);
        toDoForm.addEventListener("submit", handToDoSubmit);
    }
}






main();
// link.addEventListener("click", hadleLinkClick);
// loginForm.addEventListener("submit", loginButtonClick);

