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
let months =[
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
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
//creates 5 day forecast
let day1, day2, day3, day4, day5;
if (weekDayNumber < 6) {
    day1, day2, day3, day4, day5 = daysOfWeek[weekDayNumber + 1];
    document.getElementById("day1").innerHTML = day1;
    document.getElementById("day2").innerHTML = day2;
    document.getElementById("day3").innerHTML = day3;
    document.getElementById("day4").innerHTML = day4;
    document.getElementById("day5").innerHTML = day5;

}
