const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout-button");
const toDoList = document.querySelector("#todo-list");
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
let deleteId;

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";
let toDos = [];
const TODOS_KEY = "todos";

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

function logOutButton(event) {
    event.preventDefault();
    localStorage.removeItem(USER_NAME);
    logOut.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    main();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delToDoButton = document.createElement("button");
    delToDoButton.innerText = "Delete";
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(delToDoButton);
    delToDoButton.addEventListener("click", DeleteToDo);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function DeleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    deleteId = li.id;
    const localToDo = localStorage.getItem(TODOS_KEY);
    let deleteLocalToDo = parseTodoObject(localToDo);
    console.log(deleteLocalToDo);
    console.log("--------");
    toDos = deleteLocalToDo.filter(sexyfilter);

    console.log(deleteLocalToDo);
    console.log(toDos);
    saveToDos();
    // console.log(findid(deleteLocalToDo, deleteId));
    // deleteLocalToDo[findid(deleteLocalToDo, deleteId)];
    // toDos = deleteLocalToDo;
}

function sexyfilter(Item) {
    return Item.id !== Number(deleteId)
}


// function findid(deleteLocalToDo, deleteId) {
//     let index = 0;
//     for (let i = 0; i < deleteLocalToDo.length; i++) {
//         if (deleteLocalToDo[i].id === deleteId) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// }

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
    const saveUserName = localStorage.getItem(USER_NAME);
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
            console.log(toDos);
        }
        paintGreetings(saveUserName);
        // event.preventDefault();
    }
}
function main() {
    toDoForm.addEventListener("submit", handToDoSubmit);
    logOut.addEventListener("click", logOutButton);
    const localToDo = localStorage.getItem(TODOS_KEY);
    if (localToDo !== null) {
        toDos = parseTodoObject(localToDo);
        toDos.forEach(paintToDo);
        console.log(toDos);
    }
    logInManager();
}

function parseTodoObject(localToDo) {
    const parseToDos = JSON.parse(localToDo);
    return parseToDos;
}

// const localToDo = localStorage.getItem(TODOS_KEY);
// if (localToDo !== null) {
//     toDos = parseTodoObject(localToDo);
//     toDos.forEach(paintToDo);
//     console.log(toDos);
// }

main();
// link.addEventListener("click", hadleLinkClick);
// loginForm.addEventListener("submit", loginButtonClick);
