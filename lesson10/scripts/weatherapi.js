 const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7809b518da35ed3a92d9d76b7235d8c8&units=imperial';

fetch(apiURL)
    .then(
        (response) => response.json({
        }
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather);
            let currentTemp= currentWeather.main.temp;
            let currentImageIcon = currentWeather.weather[0].icon;
            let currentImage = 'https://openweathermap.org/img/w/' +
            currentIMageIcon + '.png';


            document.querySelector('#current-temp')
            .textContent = currentTemp;

            document.querySelector('#imagesrc')
            .textContent = currentImage;

            document.querySelector('#weather-icon')
            .setAttribute('alt',currentWeather.weather[0].main);
        }
    ));