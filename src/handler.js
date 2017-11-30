const http = require("http");
const fs = require("fs");
const path = require("path");
const request=require('request');
const apiKey = "927f2f963976b225f9725ffae71d9787";
const link = "http://api.openweathermap.org/data/2.5/weather?q=";

function handler(req, res) {
  var url = req.url;

  if (url.indexOf('/api?search=')!==-1) {
    var url = req.url;
    var query = url.split("=")[1];
    var newlink = link + query + "&appid=" + apiKey;

        request(newlink, function(err, res1, body) {
          if (err) {
          }
        res.writeHead(200, { "Content-Type": "application/text" });
        res.end(body);
});

  } else if (url == "/") {
    handlePublicFiles("/index.html", res)
  } else {
    handlePublicFiles(url, res)
  }
}

function handlePublicFiles(url, serverResponse) {
  var parts = url.split(".")[1];

  var contentTypes = {
    css: "text/css",
    html: "text/html",
    js: "application/javascript",
    ico: "image/x-icon"
  }[parts];

  fs.readFile(path.join(__dirname, "..", "public", url), (err, data) => {
    if (err) {
      serverResponse.writeHead(500, {
        "Content-Type": "text/html"
      });
      serverResponse.end("Errooor");
    } else {
      serverResponse.writeHead(200, {
        "Content-Type": contentTypes
      });

      serverResponse.end(data);
    }
  });

}

module.exports = handler;
