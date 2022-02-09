import { getWeatherData } from "./getWeather";


const weather = (() => {
    const submitWeatherBtn = document.querySelector('#submitWeather');
    const weatherLocation = document.getElementById('getWeatherData');

    submitWeatherBtn.addEventListener('click', function(e){
        e.preventDefault();
        getWeatherData(weatherLocation.value);
    });
})();