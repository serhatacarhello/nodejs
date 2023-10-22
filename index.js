var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      }
    });
  } else if (req.url == "/products") {
    fs.readFile("urunler.html", (err, html) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      }
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server 3000 portunda başlatıldı.");
});
