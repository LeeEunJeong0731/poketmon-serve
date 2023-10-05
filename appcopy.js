const http = require("http");
const fs = require("fs");
const { response } = require("express");
//* http = node.js에서 사용하는 모듈이고 http 모듈은 server개체와 request(요청), response(응답) 객체를 사용한다.
//*node.js 에 내장되어있는 함수  http 와 fs를 가져온다,

//*createServer는 남이 만든 함수이고 createServer 뒤에 있는 것들은 콜백함수로 보면 된다.

const server = http.createServer(function (request, response) {
  console.log(request.url);
  console.log(response);

  //*요청하는 urL이 </>라면 밑의 값을 나타내라
  response.writeHead(200, { "contant-Type": "text/html" }); //(상태코드, 헤더 정보)

  if (request.url === "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        console.err("파일을 읽지 못했습니다.");
      } else {
        response.end(data);
      }
    });
  }
  //*contant-type은 html을 쓰되 나타내는건 text로 나타내는것
  //*write = 본문(body)에 보여지는 부분을 쓰는 메서드이다.
  //*응답을 종료하는 메서드
  if (request.url === "/sub") {
    response.writeHead(200, { "contant-Type": "text/html" });
    fs.readFile("./index1.html", function (err, data) {
      if (err) {
        console.err("파일을 찾지 못했습니다.");
      } else {
        response.end(data);
      }
    });
  }
});
server.listen(1234);
