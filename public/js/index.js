document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
});

function showWeather() {
	  var query = document.querySelector("#cityName").value;
	   if(query===''){alert("Input a city name");}
	  document.getElementById("cityName").value = '';
	  var xhr = new XMLHttpRequest();
	  var data = '';
	  var tempnode = document.createElement('h2');
	  tempnode.id = 'temp';
	  document.body.appendChild(tempnode);


  
  xhr.onreadystatechange = function() {
    if ( xhr.status == 200 && xhr.readyState==4) {
      data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  
  	
  	document.getElementById('temp').innerHTML = Math.round(data.main.temp-273) + '&#8451;';
  	

  };
 
   xhr.open("GET", "/api?search=" + query, true);
    //xhr.open('GET','https://www.google.co.il/search?client=ubuntu&chan',true);
    xhr.send();

}

  


