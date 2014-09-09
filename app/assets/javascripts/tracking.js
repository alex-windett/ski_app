function geoFindMe() {
  var output = document.getElementById("output");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
    console.log(latitude)
    console.log(longitude)
  };

  function error() {
    output.innerHTML = "Can't get location";
  };

  output.innerHTML = "<p>Locating…</p>";

  options = {
    enableHighAccuracy: true,
    timeout: 6000
  }

  navigator.geolocation.watchPosition(success, error, options);
}

// ajax put request with the latitude and longitude into markers model into the corosponding colomuns