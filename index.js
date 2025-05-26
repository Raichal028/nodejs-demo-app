const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello from Node.js CI/CD!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
