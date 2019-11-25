 //get day of week
 let weekDayNumber = currentDate.getDay();
 let daysOfWeek = [
     'Sunday',
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday'
 ];
 let weekDay = daysOfWeek[weekDayNumber];
 currentDateString = weekDay + ', ';
 currentDateString = currentDateString + currentDate.getDate();
 let months = [
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December',
 ];
 let monthNumber = currentDate.getMonth();
 let month = months[monthNumber];
 currentDateString += ' ' + month;
 currentDateString += ' ' + currentDate.getFullYear();
 document.getElementById('currentDate').innerHTML = currentDateString;
 console.log(currentDateString);


 //create 5 day forecast
 let currentDay = weekDayNumber;

 const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=7809b518da35ed3a92d9d76b7235d8c8&units=imperial';

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



             //DEBUG
             console.log(dateString);

             //loop through results
             forecasts.list.forEach(
                 (forecast) => {
                     if (forecast.dt_txt.includes(dateString) &&
                         forecast.dt_txt.includes(hourString)) {
                      
                            //DEBUG:
                        console.log(forecast.main.temp);

                         const element = document.getElementById(`temp${counter}`);
                         element.innerHTML = forecast.main.temp + '&deg;';

                         counter += 1;
                     };
                 }
             );
         }
     );