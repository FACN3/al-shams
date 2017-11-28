const http = require("http");

const apiKey = "927f2f963976b225f9725ffae71d9787";
const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${
  apiKey
}`;

const handlersFunc = {
  fetchData: (fetchData = () => {
    http.get(url, res => {
      var data = "";

      res.on("data", chunk => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(data);
      });
    });
  })
};

module.exports = handlersFunc;
