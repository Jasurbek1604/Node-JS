const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    "./public",
    req.url === "/" ? "home.html" : req.url
  );

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
  });
});

server.listen(3000, () => {
  console.log("Server hs been start.....");
});
