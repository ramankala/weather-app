async function getWeatherData(location, unit) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=81c987ec615926ac74339f92f4a4b044&units=${unit}`, {mode: 'cors'});
    const weatherData = await response.json();

    const container = document.querySelector('#container');
    const weatherDiv = document.createElement('div');
    const tempDiv = document.createElement('div');
    const locationDiv = document.createElement('div');
    const img = document.createElement('img');
    locationDiv.setAttribute('id', 'locationDiv');
    weatherDiv.setAttribute('id', 'weatherDiv');
    tempDiv.setAttribute('id', 'tempDiv');
    img.setAttribute('id', 'imgWeather');

    weatherDiv.textContent = weatherData.weather[0].main;
    locationDiv.textContent = weatherData.name;

    if (unit === 'metric'){
        tempDiv.textContent = weatherData.main.temp + ' °C';
    } else {
        tempDiv.textContent = weatherData.main.temp + ' °F';
    }

    if (weatherData.weather[0].main === 'Clear'){
        img.src = 'http://openweathermap.org/img/wn/01d@2x.png';
    } else if (weatherData.weather[0].main === 'Clouds'){
        img.src = 'http://openweathermap.org/img/wn/03d@2x.png';
    } else if (weatherData.weather[0].main === 'Drizzle'){
        img.src = 'http://openweathermap.org/img/wn/09d@2x.png';
    } else if (weatherData.weather[0].main === 'Rain'){
        img.src = 'http://openweathermap.org/img/wn/10d@2x.png';
    } else if (weatherData.weather[0].main === 'Thunderstorm'){
        img.src = 'http://openweathermap.org/img/wn/11d@2x.png';
    } else if (weatherData.weather[0].main === 'Snow'){
        img.src = 'http://openweathermap.org/img/wn/13d@2x.png';
    } else {
        img.src = 'http://openweathermap.org/img/wn/50d@2x.png';
    }

    container.appendChild(locationDiv);
    container.appendChild(weatherDiv);
    container.appendChild(tempDiv);
    container.appendChild(img);
};

export{getWeatherData};