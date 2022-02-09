import { deRender } from "./deRender";
import { getWeatherData } from "./getWeather";

const weather = (() => {
    const submitWeatherBtn = document.querySelector('#submitWeather');
    const weatherLocation = document.getElementById('getWeatherData');
    const metric = document.getElementById('celsius');
    const imperial = document.getElementById('farenheit');
    const container = document.querySelector('#container');

    submitWeatherBtn.addEventListener('click', function(e){
        e.preventDefault();
        container.style.display = 'flex';
        deRender();
        if (metric.checked === true){
            getWeatherData(weatherLocation.value, metric.value);
        } else {
            getWeatherData(weatherLocation.value, imperial.value);
        }

    });
})();