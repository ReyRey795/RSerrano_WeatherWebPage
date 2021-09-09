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
         const daily = data.daily;

         for (let i = 0; i < 5; i++){
             var dailyWeather = daily[i]

             
             var arrayDayValue = dailyWeather;
             var minTempValue = 'Min temp. '+dailyWeather.temp.min + '*F';
             var maxTempValue = 'Max temp. '+dailyWeather.temp.max + '*F';
             var descValue = dailyWeather.weather[0].description;
             var iconValue = dailyWeather.weather[0].icon;
             icon.innerHTML = iconValue;
             desc.innerHTML = descValue;
             tempMin.innerHTML = minTempValue;
             tempMax.innerHTML = maxTempValue;
             arrayDay.innerHTML = arrayDayValue;
             Cname.innerHTML = nameValue;
         

        // for (let i = 0; i < list.length; i++) {    lat: 29.4241 lon: -98.4936
        
        //     console.log();
        // (data => {
        //     var nameValue = data['name'];
        //     var tempValue = data['main']['temp'] + '*F';
        //     var iconSymbol = data['weather']['icon'];
        //     var descValue = data['weather'][0]['description'];
        //     var dateValue = data['dt-text'];
        //     var humidityValue = data['main']['humidity'];
        //     var windSpeedValue = data['wind']['speed'];
        //     var uvIndexValue = data[''];
    
        //     Cname.innerHTML = nameValue;
        //     temp.innerHTML = tempValue + iconSymbol;
        //     desc.innerHTML = descValue;
        //     date.innerHTML = dateValue;
        //     humidity.innerHTML = humidityValue;
        //     windSpeed.innerHTML = windSpeedValue;
        //     uvIndex.innerHTML = uvIndexValue;
        // })
    }
})
    .catch(err => alert('Wrong input for the city name!'))

})});