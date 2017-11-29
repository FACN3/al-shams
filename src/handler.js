const http = require("http");
const fs = require("fs");
const path = require("path");

const apiKey = "927f2f963976b225f9725ffae71d9787";
const link = "http://api.openweathermap.org/data/2.5/weather?q=";

/*+ query + '&appid=' + apiKey;*/

function handler(req, res) {
  var url = req.url;

  function sendData(data) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(data);
    res.end();
  }

  if (url == "/") {
    url = "/index.html";
  }
  var parts = url.split(".")[1];

  var contentTypes = {
    css: "text/css",
    html: "text/html",
    js: "application/javascript",
    ico: "image/x-icon"
  }[parts];

  fs.readFile(path.join(__dirname, "..", "public", url), (err, data) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/html"
      });
      res.end("Errooor");
    } else {
      res.writeHead(200, {
        "Content-Type": contentTypes
      });

      res.end(data);
    }
  });
  if (url.indexOf("/getweather") !== -1) {
    var url = req.url;
    var query = url.split("=")[1];

    var newlink = link + query + "&appid=" + apiKey;

    var data = "";
    http.get(newlink, function(response) {
      response.on("data", function(chunk) {
        data += chunk;
      });

      response.on("end", function() {
        var jsonData = JSON.parse(data);
        console.log('This is jsonData : -------- ', jsonData);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonData);
      });
    });
  }
}

module.exports = handler;
