function showWeather() {
  var query = document.querySelector("#cityName").value;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.status === 404) {
      console.log("ERROR 404");
    }
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("SERVER IS WORKING");
      var data = JSON.parse(xhr.responseText);
    }
  };
  if (query) {
    xhr.open("GET", "/getweather?search=" + query, true);
    xhr.send();
  }
}

module.export = showWeather;
