const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout-button");
const toDoList = document.querySelector("#todo-list");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const logincomtain = document.getElementById("logincontainer");
let deleteId;
let saveUserName;

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";
let toDos = [];
const TODOS_KEY = "todos";

//CLICK_EVENT
function hadleLinkClick(event) {
    event.preventDefault();
}

//CLICK_EVENT
function loginButtonClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USER_NAME, username);
    paintGreetings(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.id = "";
}

//CLICK_EVENT => logout해서 다시 main으로 
function logOutButton(event) {
    event.preventDefault();
    localStorage.removeItem(USER_NAME);
    logOut.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    loginInput.value = "";
    loginForm.id = "login-form";
    logincomtain.style.zIndex = "-1";
    main();
}

//Login시 class = HIDDEN 값 넣어주는 함수
function paintGreetings(saveUserName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logincomtain.style.zIndex = "1";
    greetingAnimation(saveUserName);
    setTimeout(() => { 
        logOut.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        toDoList.classList.remove(HIDDEN_CLASSNAME);
        toDoForm.classList.remove(HIDDEN_CLASSNAME);
    }, 3000);
    // toDoList.classList.remove(HIDDEN_CLASSNAME);
    // toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

let finalGreet = '';

function greetingAnimation(saveUserName) {
    let greet = saveUserName + "님"; 
    greeting.innerText = greet;
    
    setTimeout((greet) => { 
        greet = "새로운 세계로"; 
        greeting.innerText = greet;
    }, 1000);
    setTimeout((greet) => { 
        greet = "오신것을 환영합니다.";
        greeting.innerText = greet;
    }, 2000);
}

//ToDo_List Creator
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delToDoButton = document.createElement("button");
    delToDoButton.innerText = "Delete";
    // delToDoButton.id = "delToDoButton";
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(delToDoButton);
    delToDoButton.addEventListener("click", DeleteToDo);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

//LocalStorage => save todos
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//DELETE_AND_LOCALSTORAGE_ARRAY 변환
function DeleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    deleteId = li.id;
    const localToDo = localStorage.getItem(TODOS_KEY);
    let deleteLocalToDo = parseTodoObject(localToDo);
    toDos = deleteLocalToDo.filter(sexyfilter);
    saveToDos();
}

//FILTER FUNCTION
function sexyfilter(Item) {
    return Item.id !== Number(deleteId)
}

//TODO
function handToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObject = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObject);
    toDoInput.value = "";
    paintToDo(newTodoObject);
    saveToDos();
}

function logInManager() {
    saveUserName = localStorage.getItem(USER_NAME);
    if (saveUserName === null) {
        //show the form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", loginButtonClick);
    } else {
        //show the h1
        const localToDo = localStorage.getItem(TODOS_KEY);
        if (localToDo !== null) {
            toDos = parseTodoObject(localToDo);
            toDos.forEach(paintToDo);
        }
        loginForm.id="";
        paintGreetings(saveUserName);
    }
}

function main() {
    toDoForm.addEventListener("submit", handToDoSubmit);
    logOut.addEventListener("click", logOutButton);
    const localToDo = localStorage.getItem(TODOS_KEY);
    logInManager();
}

function parseTodoObject(localToDo) {
    const parseToDos = JSON.parse(localToDo);
    return parseToDos;
}

main();