document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
});

function showWeather() {
  var query = document.querySelector("#cityName").value;
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if ( xhr.status == 200 && xhr.readyState==4) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
   xhr.open("GET", "/api?search=" + query, true);
    //xhr.open('GET','https://www.google.co.il/search?client=ubuntu&chan',true);
    xhr.send();
  
}

