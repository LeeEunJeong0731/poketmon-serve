const { readFile } = require("fs");
const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);
  console.log(response);

  if (request.url === "/") {
    let doc =
      "<html> <head> <body> <a href='http://localhost:1234/sub'>main</a> </body> </head></html>";

    response.writeHead(200, { "contant-Type": "text/html" });
    response.end(doc);
  }
  if (request.url === "/sub") {
    let doc =
      "<html> <head> <body> <a href='http://localhost:1234'>sub</a> </body> </head></html>";
    response.writeHead(200, { "contant-Type": "text/html" });
    response.end(doc);
  }
});
server.listen(1234);
