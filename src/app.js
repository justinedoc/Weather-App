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
const sunriseM = document.querySelector(".rise")
const sunsetM = document.querySelector(".set")
const humidityM = document.querySelector(".current-humidity");
const visibilityM = document.querySelector(".current-visibility");
const windM = document.querySelector(".current-wind")
const monday = document.querySelector(".mon-temp")
const tuesday = document.querySelector(".tue-temp")
const wednesday = document.querySelector(".wed-temp")
const thursday = document.querySelector(".thu-temp")
const friday = document.querySelector(".fri-temp")
const saturday = document.querySelector(".sat-temp")
const sunday = document.querySelector(".sun-temp")




//day & current time

const time = new Date();
const day = time.getDay();
let month;

switch (time.getMonth()) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "Febuary";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "Novemeber";
        break;
    case 12:
        month = "December";
        break;
    default:
        alert("doesn't exist")
}

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
    const API = `5b15a1f1b347446e9d7123741240804`
    const Url = `http://api.weatherapi.com/v1/forecast.json?key=${API}&q=${searchQuery}&days=7`;

    fetch(Url).then((response) => {
        return response.json()
    }).then(data => {
        console.log(data);
        currentTemp.textContent = data.current.temp_c;
        document.getElementById("temp-day").textContent = data.current.temp_c;
        cityName.textContent = `${data.location.name}, ${data.location.country}`;
        document.querySelector(".country").textContent = data.location.country;
        weatherDes.textContent = data.current.condition.text;
        document.getElementById("des").textContent = data.current.condition.text;
        humidityM.textContent = data.current.humidity;
        windM.textContent = data.current.wind_kph;
        visibilityM.textContent = data.current.vis_km;
        document.getElementById("1").textContent = data.current.humidity + "%"
        document.getElementById("2").textContent = data.current.wind_kph + "km/h"
        document.getElementById("3").textContent = data.current.vis_km + "km/h";
        document.getElementById("4").textContent = data.current.pressure_in + "Nm";
        sunriseM.textContent = data.forecast.forecastday[0].astro.sunrise;
        sunsetM.textContent = data.forecast.forecastday[0].astro.sunset;
        currentTime.textContent = data.location.localtime;
        document.querySelector(".current-uv").textContent = data.current.uv;
        document.querySelector(".current-pressure").textContent = data.current.pressure_in;
        monday.textContent = data.forecast.forecastday[0].day.avgtemp_c;
        tuesday.textContent = data.forecast.forecastday[1].day.avgtemp_c;
        wednesday.textContent = data.forecast.forecastday[2].day.avgtemp_c;
        thursday.textContent = data.forecast.forecastday[3].day.avgtemp_c;
        friday.textContent = data.forecast.forecastday[4].day.avgtemp_c;
        saturday.textContent = data.forecast.forecastday[5].day.avgtemp_c;
        sunday.textContent = data.forecast.forecastday[6].day.avgtemp_c;
        document.getElementById("date").textContent = `${time.getDay()} ${month} ${time.getFullYear()}`;
    }).catch((err) => {
        alert("offline");
    });
}
searchBtn.addEventListener("click", weatherInfo);

