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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


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
            
             const iCityName = document.createElement('h1');
             const iUvIndex = document.createElement('p');
             const iWindSpeed = document.createElement('p');
             const iHumidity = document.createElement('p');
             const iDate = document.createElement('p');
             const iIcon = document.createElement('p');
             const iDesc = document.createElement('p');
             const iMaxTemp = document.createElement('p');
             const iMinTemp = document.createElement('p');
             
             iCityName.textContent = nameValue;
             iUvIndex.textContent = 'UV Index: ' + dailyWeather.uvi;
             iWindSpeed.textContent =  'Wind Speed: ' + dailyWeather.wind_speed;
             iHumidity.textContent = 'Humidity: ' + dailyWeather.humidity;
             iDate.textContent = new Date(dailyWeather.dt*1000).toLocaleDateString();
             iIcon.textContent = dailyWeather.weather[0].icon;
             iDesc.textContent = dailyWeather.weather[0].description;
             iMaxTemp.textContent = 'Max temp. '+ dailyWeather.temp.max + '*F';
             iMinTemp.textContent = 'Min temp. '+ dailyWeather.temp.min + '*F';
            
             iDay.appendChild(iCityName);
             iDay.appendChild(iUvIndex);
             iDay.appendChild(iWindSpeed);
             iDay.appendChild(iHumidity);
             iDay.appendChild(iDate);
             iDay.appendChild(iIcon);
             iDay.appendChild(iDesc);
             iDay.appendChild(iMaxTemp);
             iDay.appendChild(iMinTemp);

             

             

             cityContainer.appendChild(iDay);
    }
})
    .catch(err => alert('Wrong input for the city name!'))

})});