const API_KEY ="2818ed8632291dafaa17aa9dba74f8f4";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    console.log(url);

    fetch(url).then(Response =>Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });

}
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//위치 받는거 에러일시
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);