// Weather 
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=affb39e35704623c047ed75b5d168597&units=imperial';
var getWeather = new XMLHttpRequest();
getWeather.open('GET', apiURLstring, true);
getWeather.responseType = 'json';
getWeather.send();
getWeather.onload = function () {
    var weatherData = getWeather.response;
    document.getElementById('current-temp').innerHTML = weatherData.main.temp + '&deg;F';
    document.getElementById('condition').innerHTML = weatherData.weather[0].main;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity + '&#37;';
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed + ' mph';
    document.getElementById('icon').setAttribute("src", 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png');
}
var apiForecastString = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=affb39e35704623c047ed75b5d168597&units=imperial';
var getForecast = new XMLHttpRequest();
getForecast.open('GET', apiForecastString, true);
getForecast.responseType = 'json';
getForecast.send();
getForecast.onload = function () {
    var forecastData = getForecast.response;
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUNDAY";
    weekday[1] = "MONDAY";
    weekday[2] = "TUESDAY";
    weekday[3] = "WEDNESDAY";
    weekday[4] = "THURSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";
    var dayOfWeek = weekday[d.getDay()];
    document.getElementById('day0').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay() + 1) % 7];
    document.getElementById('day1').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay() + 2) % 7];
    document.getElementById('day2').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay() + 3) % 7];
    document.getElementById('day3').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay() + 4) % 7];
    document.getElementById('day4').innerHTML = dayOfWeek;
    document.getElementById('temp0').innerHTML = forecastData.list[0].main.temp + '&deg;';
    document.getElementById('temp1').innerHTML = forecastData.list[1].main.temp + '&deg;';
    document.getElementById('temp2').innerHTML = forecastData.list[2].main.temp + '&deg;';
    document.getElementById('temp3').innerHTML = forecastData.list[3].main.temp + '&deg;';
    document.getElementById('temp4').innerHTML = forecastData.list[4].main.temp + '&deg;';

}