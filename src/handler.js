const http = require("http");
const fs = require("fs");
const path = require('path');

const apiKey = "927f2f963976b225f9725ffae71d9787";
const link = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

  

  const fetchData = () => {
    http.get(url, res => {
      var data = "";

      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(data);
      });
    });
  }

  
  
  const homeHandler = (request, response) => {
    const url = request.url;
    if(url === '/'){
      const filePath = path.join(__dirname, '../public/index.html');
    fs.readFile(filePath, (error,file )=>{
      if(error){
        response.writeHead(500, {'Content-Type':'text/html'});
        response.end("There was an error in the server");
      }
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(file);
    });
  }
}
  











module.exports = homeHandler;

