function getFiveDayForecast(cityId){
//get day of week
let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=7809b518da35ed3a92d9d76b7235d8c8&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            //DEBUG:
            console.log(forecasts);

            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrow.getDate() + 1);

            let dateString =
                //get full year
                tomorrowDate.getfullYear() + '-' +
                //get month
                (tomorrowDate.getMonth() + 1) + '-' +
                //get day
                tomorrowDate.getDate();

            let hourString = '18:00:00';
            let counter = 1;



            //DEBUG
            //  console.log(dateString);

            //loop through results
            forecasts.list.forEach(
                (forecast) => {
                    if ( //forecast.dt_txt.includes(dateString) &&
                        forecast.dt_txt.includes(hourString)) {


                            //add temp
                        const tempelement = document.getElementById(`temp${counter}`);
                        tempelement.innerHTML = forecast.main.temp_max + '&deg;';

                        let nextDate = new Date(forecast.dt_txt);


                        //add day
                        const dayElement = document.getElementById(`temp${counter}`);
                        dayElement.innerHTML = daysOfWeek[nextDate.getDay()];

                        //add image
                        const imageElement = document.getElementById(`img${counter}`);
                        imageElement.setAttribute('src','https://openweathermap.org/img/w/' +
                        forecast.weather[0].icon + '.png');
                        imageElement.setAttribute('alt', forecast.weather[0].description);

                        counter += 1;
                    };
                }
            );
        }
    );
};