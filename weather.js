const weather = document.querySelector(".js_weather");
const API_key = "f03a84950d11c9431ac67e79a534fc7f";
const COORDS = "coords";

function getWeather(lat, lon){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
        ) .then(function(response){
            return response.json()
        }) .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText= `${place} , ${temperature}도`;
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,//---> latitude=latitude(원래는 이렇게 써야하지만, 객체에 변수의 이름과 객체의 key의 이름을 같게 저장할때) 
        longitude //longitude=longitude
     };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); 
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
     if(loadCoords===null){
        askForCoords();
     } else {
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
     }
}

function init(){
    loadCoords();
}

init();