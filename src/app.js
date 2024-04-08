'use strict';



// declaring variables 
const todaySection = document.getElementById("today");
const weekSection = document.getElementById("week");
const todayWeather = document.querySelector(".today-weather");
const weekWeather = document.querySelector(".week-weather");
const searchBtn = document.getElementById("searchBtn");
const searchInputBox = document.getElementById("searchInput");
const currentTemp = document.getElementById("current-temp");
const currentTempUnit = document.getElementById("unit");
const currentDay = document.querySelector(".day");
const currentTime = document.querySelector(".time");
const weatherDes = document.getElementById("weatherDes");
const cityImg = document.getElementById("cityImg");
const cityName = document.getElementById("cityName");


//day & current time





// nav switch 
todaySection.addEventListener("click", () => {
    weekSection.classList.remove("active");
    todaySection.classList.add("active");

    weekWeather.classList.remove("active");
    todayWeather.classList.add("active");
});

weekSection.addEventListener("click", () => {
    weekSection.classList.add("active");
    todaySection.classList.remove("active");

    weekWeather.classList.add("active");
    todayWeather.classList.remove("active");
});




// search
searchInputBox.addEventListener("keydown", (keystroke) => {
    if (keystroke.key === "Enter") {
        weatherInfo();
    }
});
const weatherInfo = () => {
    const searchQuery = searchInputBox.value.trim();
    const API = "cd8568f48841ca7926c24c488db16747";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API}&units=metric`

    fetch(url).then((linkresponse) => {
        return linkresponse.json()
    }).then(data => {
        if (data.cod === 200) {
            const temperature = data.main.temp;
            const weatherDescript = data.weather[0].description;
            currentTemp.textContent = temperature;
            weatherDes.textContent = weatherDescript;
        } else {
            alert("city not found")
        }
    }).catch((err) => {
        console.log("offline", err)
    });
    const secondAPI = `5b15a1f1b347446e9d7123741240804`
    const secondUrl = `http://api.weatherapi.com/v1/forecast.json?key=${secondAPI}&q=${searchQuery}&days=7`

    fetch(secondUrl).then((response) => {
        return response.json()
    }).then(data => {
        console.log(data)
    }).catch((err) => {

    });
}

searchBtn.addEventListener("click", weatherInfo);


