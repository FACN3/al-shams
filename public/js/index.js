function showWeather() {
  var query = document.querySelector("#cityName").value;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
    }
  };

  xhr.open("GET", "/getweather?search=" + query, true);
  xhr.send();
}
