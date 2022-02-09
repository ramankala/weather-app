async const getWeatherData = (location) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=81c987ec615926ac74339f92f4a4b044`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(weatherData.weather[0].description);

    return weatherData.weather[0].description;
};

export{getWeatherData};