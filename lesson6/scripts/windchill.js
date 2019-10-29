let currentTemp = 41;
let windSpeed = 8;
let windChill = 0;


if (currenttemp < 50 && windSpeed > 3) {
let windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp + Math.pow(windSpeed, 0.16);
}
document.getElementById("currentTemp").innerHTML = currentTemp + '&degF';
document.getElementById("windSpeed").innerHTML = windSpeed + ' mph';


if (windChill === 0) {
document.getElementById("windChill").innerHTML = 'N/A';
}
else {
    document.getElementById("windChill").innerHTML = Math.round(windChill) + '&degF';
}