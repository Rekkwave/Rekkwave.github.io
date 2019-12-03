function getFiveDayForecast(cityID) {
    var daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=2516eba340c4116d3940474f9040b5a2&units=imperial";

    fetch(apiForecastURL)
        .then(
            (response) => response.json()
        )

        .then(
            (forecasts) => {


                let hourString = '18:00:00';
                let counter = 1;


                //Loop through results
                forecasts.list.forEach(
                    (forecast) => {
                        if (forecast.dt_txt.includes(hourString)) {

                            const tempElement = document.getElementById(`temp${counter}`);
                            tempElement.innerHTML = forecast.main.temp + '&deg;F';

                            let nextDate = new Date(forecast.dt_txt);
                            const dayElement = document.getElementById(`day${counter}`);
                            dayElement.innerHTML = daysOfWeek[nextDate.getDay()];


                            const imageElement = document.getElementById(`img${counter}`);
                            imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' +
                                forecast.weather[0].icon + '.png');
                            imageElement.setAttribute('alt', forecast.weather[0].main);

                            counter += 1;



                        }
                    }
                );
            }
        );
}