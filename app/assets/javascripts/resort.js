$(document).ready(function(){

$.ajax({
  type: "GET",
  url: "http://api.worldweatheronline.com/free/v1/ski.ashx?key=fc291ebd60c20935283da4510cd776a66d335e1d&q=45.4506%2C6.978&format=json",
  // url: "http://api.worldweatheronline.com/free/v1/ski.ashx?key=fc291ebd60c20935283da4510cd776a66d335e1d&q=" + lat + "%2C" + long + "&format=json",
  // url: "http://api.worldweatheronline.com/free/v1/ski.ashx?key=fc291ebd60c20935283da4510cd776a66d335e1d&q=" + London + "&format=json",
  dataType: "json"
}).success(function(data){
  var weather = data.data.weather[0]
  $(".weather")
    .append("<li>Max Temp: " + weather.mid[0].maxtempC + "</li>")
    .append("<li>Min Temp: " + weather.mid[0].mintempC + "</li>")
    .append("<li>Current Snow Depth: " + weather.totalSnowfall_cm + "</li>")
    .append("<li>Chance of Snow: " + weather.chanceofsnow + "</li>")
    .append("<h2>Hourly Updates</h2>")
    .append("<li>Latest Mid Level Wheather as of: " + weather.hourly[0].time + "</li>")
    .append("<li>Wind Speed: " + weather.hourly[0].mid[0].windspeedMiles + "</li>")
    .append("<li>Description: " + weather.hourly[0].mid[0].weatherDesc[0].value + "<img src='" + weather.hourly[0].mid[0].weatherIconUrl[0].value + "'/></li>")
})

});
