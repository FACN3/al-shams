const cityInput = document.getElementById("cityName");
const cityButton = document.getElementById("serchButton");
var weatherDiv = document.getElementById("cityWeather");

function showTodayWeather(data) {
  weatherDive.innerHTML = "";
  cityInput.value = "";

  var theday = document.createElement("h3");
  theday.textContent = "Today's weather";
  weatherDiv.appendChild(theday);
}
