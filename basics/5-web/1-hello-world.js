const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(4242, err => {
  console.log("Error : ", err);
  console.log("Server is running...");
});
