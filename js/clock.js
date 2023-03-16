const clock = document.querySelector("h2#clock");
function getClock() {
    const date = new Date();
    const houts = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // clock.innerText = (date.getHours() + "시" + clockAddZero(minutes) + minutes + "분" + clockAddZero(seconds) + seconds + "초");
    clock.innerText = `${houts} : ${minutes} : ${seconds}`;
}



// function clockAddZero(inputTimeValue) {
//     if (inputTimeValue < 10) {
//         return "0";
//     }
//     // else {
//     //     const space = ' ';
//     //     return space.trim();
//     // }
//     else {
//         return '';
//     }
// }
getClock();
setInterval(getClock, 1000);