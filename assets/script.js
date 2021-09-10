var cityContainer = document.querySelector('#cityContainer')
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var Cname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var tempMin = document.querySelector('.tempMin');
var tempMax = document.querySelector('.tempMax');
var date = document.querySelector('.date');
var lat = document.querySelector('.lat');
var long = document.querySelector('.long');

//do this after other information is done
var icon = document.querySelector('.icon');

var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uvIndex = document.querySelector('.uvIndex');
var arrayDay = document.querySelector('.numberedDay')




button.addEventListener('click', function() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=imperial&appid=aa46b7171a4a8a6c05d7c89ff0330127')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // console.log(data.city.name)
        // console.log(data.city.coord.lon)    
     var latitude = data.city.coord.lat;
     var longitude = data.city.coord.lon;

     lat.innerHTML = latitude;
     long.innerHTML = longitude;
     var nameValue = data.city.name;
   

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=imperial&appid=aa46b7171a4a8a6c05d7c89ff0330127')
    .then(response => response.json())
    .then(data => {
         console.log(data)
         

         for (let i = 0; i < 5; i++){

             var dailyWeather = data.daily[i]
             console.log(i);

             const iDay = document.createElement('div');

             const iUvIndex = document.createElement('p');
             const iWindSpeed = document.createElement('p');
             const iHumidity = document.createElement('p');
             const iDate = document.createElement('p');
             const iIcon = document.createElement('p');
             const iDesc = document.createElement('p');
             const iMaxTemp = document.createElement('p');
             const iMinTemp = document.createElement('p');

             iuvIndex.textContent = 'UV Index: ' + dailyWeather.uvi;
             iwindSpeed.textContent =  'Wind Speed: ' + dailyWeather.wind_speed;
             iDay.appendChild(iuvIndex);
             iDay.appendChild(iwindSpeed);
             

             var arrayDayValue = dailyWeather;
             var minTempValue = 'Min temp. '+ dailyWeather.temp.min + '*F';
             var maxTempValue = 'Max temp. '+ dailyWeather.temp.max + '*F';
             var descValue = dailyWeather.weather[0].description;
             var iconValue = dailyWeather.weather[0].icon;
             var dateValue = dailyWeather.dt;
             var humidityValue = 'Humidity: ' + dailyWeather.humidity;
             var windSpeedValue = 'Wind Speed: ' + dailyWeather.wind_speed;
             
             windSpeed.innerHTML = windSpeedValue;
             humidity.innerHTML = humidityValue;
             date.innerHTML = new Date(dateValue*1000).toLocaleDateString();
             icon.innerHTML = iconValue;
             desc.innerHTML = descValue;
             tempMin.innerHTML = minTempValue;
             tempMax.innerHTML = maxTempValue;
             arrayDay.innerHTML = arrayDayValue;
             Cname.innerHTML = nameValue;

             cityContainer.appendChild(iDay);
    }
})
    .catch(err => alert('Wrong input for the city name!'))

})});