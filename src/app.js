'use strict';
const todaySection = document.getElementById("today");
const weekSection = document.getElementById("week");
const todayWeather = document.querySelector(".today-weather");
const weekWeather = document.querySelector(".week-weather");
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