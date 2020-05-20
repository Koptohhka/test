import {
    COUNTRY_BY_ID
} from '../script/data/countries.js';

import {
    DATE_OBJECT
} from '../script/data/date-data.js';

import {
    URL_OBJ
} from '../script/data/urls.js';

import {
    currentDate,
    getDayOfWeek,
    setDynamicTime
} from '../script/utils.js';

const mainSectionLeft = document.getElementById('weather-container');


async function gerCurrentLocation() {
    const response = await fetch(URL_OBJ.CURRENT_LOCATION);
    const data = await response.json();
    renderCurrentUserInfo(data.city);
}

async function renderCurrentUserInfo(cityName) {
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${cityName}&days=1&units=M&lang=en&key=fd94bceee040423489f53c43355656c0`);
    const data = await response.json();
    const dataObj = data.data[0];

    const template = `<div class="section-left__town-title">
        ${dataObj.city_name}, ${COUNTRY_BY_ID[dataObj.country_code]}
        </div>
        <div class="section-left__day-info">
    ${DATE_OBJECT.DAY_NAMES[currentDate.getDay() - 1]} ${currentDate.getDate()} ${DATE_OBJECT.MONTH_NAMES[currentDate.getMonth()]} <span id="timer">${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}</span>
         </div>
         <div class="section-left__today-container">
    <div class="today-container__degree-number">
        <p class="today-container__degree-title">${Math.ceil(dataObj.temp)}</p>
        <p class="today-container__degree-round">°</p>
    </div>
    <img class="today-container__cloud" src="https://www.weatherbit.io/static/img/icons/${dataObj.weather.icon}.png" alt="">
    <div class="today-container__weather-info">
        <p class="weather-info__weather-type">${dataObj.weather.description}</p>
        <p class="weather-info__feels-like">FEELS LIKE: ${dataObj.app_temp}°</p>
        <p class="weather-info__wind">${Math.ceil(dataObj.wind_spd)} m/s</p>
        <p class="weather-info__humidity">HUMIDITY: ${dataObj.rh}%</p>
    </div>
    </div>`;

    mainSectionLeft.insertAdjacentHTML('beforeend', template);
    renderFutureWeatherInfo(cityName);
    setInterval(setDynamicTime, 1000);
}

async function renderFutureWeatherInfo(cityName) {
    const WEATHER_URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=4&units=M&lang=en&key=fd94bceee040423489f53c43355656c0`;
    const response = await fetch(WEATHER_URL);
    const data = await response.json();

    const template = `<ul class="section-left__another-days">
    <li class="another-days__another-day">
        <p class="another-day__title">${DATE_OBJECT.DAY_NAMES[getDayOfWeek(data.data[1].datetime)]}</p>
        <p class="another-day__degree">${Math.ceil(data.data[1].temp)}°</p>
        <img src="https://www.weatherbit.io/static/img/icons/${data.data[1].weather.icon}.png" alt="" class="another-day__icon">
    </li>
    <li class="another-days__another-day">
        <p class="another-day__title">${DATE_OBJECT.DAY_NAMES[getDayOfWeek(data.data[2].datetime)]}</p>
        <p class="another-day__degree">${Math.ceil(data.data[2].temp)}°</p>
        <img src="https://www.weatherbit.io/static/img/icons/${data.data[2].weather.icon}.png" alt="" class="another-day__icon">
    </li>
    <li class="another-days__another-day">
        <p class="another-day__title">${DATE_OBJECT.DAY_NAMES[getDayOfWeek(data.data[3].datetime)]}</p>
        <p class="another-day__degree">${Math.ceil(data.data[3].temp)}°</p>
        <img src="https://www.weatherbit.io/static/img/icons/${data.data[3].weather.icon}.png" alt="" class="another-day__icon">
    </li>
    </ul>`;

    mainSectionLeft.insertAdjacentHTML('beforeend', template);
}



gerCurrentLocation();