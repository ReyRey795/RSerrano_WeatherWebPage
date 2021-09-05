var APIkey = "aa46b7171a4a8a6c05d7c89ff0330127"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL);