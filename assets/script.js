var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var Cname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var date = document.querySelector('.date');

//do this after other information is done
var icon = document.querySelector('.icon');

var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.windSpeed');
var uvIndex = document.querySelector('.uvIndex');

button.addEventListener('click', function() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=aa46b7171a4a8a6c05d7c89ff0330127')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'] + '*F';
        var iconSymbol = data['weather']['icon'];
        var descValue = data['weather'][0]['description'];
        var dateValue = data['dt-text'];
        var humidityValue = data['main']['humidity'];
        var windSpeedValue = data['wind']['speed'];
        var uvIndexValue = data[''];

        Cname.innerHTML = nameValue;
        temp.innerHTML = tempValue + iconSymbol;
        desc.innerHTML = descValue;
        date.innerHTML = dateValue;
        humidity.innerHTML = humidityValue;
        windSpeed.innerHTML = windSpeedValue;
        uvIndex.innerHTML = uvIndexValue;
    })

.catch(err => alert('Wrong input for the city name!')) 
});