document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
});

function showWeather() {
  var query = document.querySelector("#cityName").value;
  if (query === "") {
    alert("Input a city name");
  }
  document.getElementById("cityName").value = "";
  var xhr = new XMLHttpRequest();
  var data = "";
  var tempnode = document.createElement("h2");
  var name = document.createElement("h1");
  tempnode.id = "temp";
  name.id = "cityname";
  name.className = "cityname";
  document.body.appendChild(tempnode);
  document.body.appendChild(name);
  var sunny = document.querySelector("#sunny");
  var rainy = document.querySelector("#rainy");
  var clouds = document.querySelector("#clouds");

  xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4) {
      data = JSON.parse(xhr.responseText);
      if (data.weather[0].main == "Clear") {
        sunny.style.display = "block";
        rainy.style.display = "none";
        clouds.style.display = "none";
      } else if (
        data.weather[0].main == "Rain" ||
        data.weather[0].main == "Mist"
      ) {
        rainy.style.display = "block";
        sunny.style.display = "none";
        clouds.style.display = "none";
      } else if (data.weather[0].main == "Clouds") {
        clouds.style.display = "block";
        rainy.style.display = "none";
        sunny.style.display = "none";
      } else {
        clouds.style.display = "none";
        rainy.style.display = "block";
        sunny.style.display = "none";
      }

      document.getElementById("temp").innerHTML =
        Math.round(data.main.temp - 273) + "&#8451;";
      document.getElementById("cityname").innerHTML = data.name;
    }
  };

  xhr.open("GET", "/api?search=" + query, true);
  xhr.send();
}
