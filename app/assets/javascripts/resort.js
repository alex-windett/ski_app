$(document).ready(function(){

$.ajax({
  type: "GET",
  url: "http://api.worldweatheronline.com/free/v1/ski.ashx?key=fc291ebd60c20935283da4510cd776a66d335e1d&q=45.4506%2C6.978&format=json",
  dataType: "json"
}).success(function(data){
  $(".weather")
    .append("<li>Max Temp: " + data.data.weather[0].mid[0].maxtempC + "</li>")
    .append("<li>Min Temp: " + data.data.weather[0].mid[0].mintempC + "</li>")
    .append("<li>Current Snow Depth: " + data.data.weather[0].totalSnowfall_cm + "</li>")
    .append("<li>Chance of Snow: " + data.data.weather[0].chanceofsnow + "</li>")
    .append("<h2>Hourly Updates</h2>")
    .append("<li>Latest Mid Level Wheather as of: " + data.data.weather[0].hourly[0].time + "</li>")
    .append("<li>Wind Speed: " + data.data.weather[0].hourly[0].mid[0].windspeedMiles + "</li>")
    
    .append("<li>Description: " + data.data.weather[0].hourly[0].mid[0].weatherDesc[0].value + "<img src='" + data.data.weather[0].hourly[0].mid[0].weatherIconUrl[0].value + "'/></li>")
})

});
