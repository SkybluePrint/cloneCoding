const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const  USER_NAME = "username";

function loginButtonClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USER_NAME, username);
    greeting.innerText = `Hello ${username}`; //새방식 을 사용하자
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function hadleLinkClick(event) {
    event.preventDefault();
}

link.addEventListener("click", hadleLinkClick);
loginForm.addEventListener("submit", loginButtonClick);

const saveUserName = localStorage.getItem(USER_NAME);
console.log(saveUserName);

if(saveUserName === null){
    //show the form
    


}else {
    //show the h1
}