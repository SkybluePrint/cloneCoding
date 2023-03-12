const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const loggout = document.querySelector("#logout_button");
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
}

function logoutbutton() {
    loggout.classList.remove(HIDDEN_CLASSNAME);
}

// link.addEventListener("click", hadleLinkClick);
// loginForm.addEventListener("submit", loginButtonClick);

const saveUserName = localStorage.getItem(USER_NAME);
console.log(saveUserName);

if (saveUserName === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginButtonClick);
} else {
    //show the h1
    paintGreetings(saveUserName);
}
