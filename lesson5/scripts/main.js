let currentDate = new Date();
let currentDateString;


// get day of week
let weekDayNumber = currentDate.getDay();
let daysOfWeek =[
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
currentDateString  = currentDateString + currentDate.getDate();



//creates 5 day forecast
let day1, day2, day3, day4, day5;
if (weekDayNumber < 6) {
    day1, day2, day3, day4, day5 = daysOfWeek[weekDayNumber + 1];
    document.getElementById("day1").innerHTML = day1;
    document.getElementById("day2").innerHTML = day2;
    document.getElementById("day3").innerHTML = day3;
    document.getElementById("day4").innerHTML = day4;
    document.getElementById("day5").innerHTML = day5;


let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    // add one day to current day
    currentDay++;
    // if current day is greater than 6 (Saturday), reset it to 0 (Sunday)
    if (currentDay > 6) {
        currentDay = 0;
    }

    // Asigning value to placeholder in HTML
    const ent = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
// show/hide pancake
let weekDayNumber = currentDate.getDay();
let daysOfWeek =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];



let weekDay = daysOfWeek[weekDayNumber];
    if (weekDayNumber == 5){
        document.getElementById("pancake").removeAttribute("class","hidden");
    }
}}
