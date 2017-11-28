const http = require("http");
const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";

const server = http.createServer();

server.listen(port, () => {
  console.log(`server listening on: http://${host}:${port}`);
});
