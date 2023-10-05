const http = require("http");

const server = http.createServer(function (request, response) {
  //   console.log(request);
  console.log(typeof response);
  // 요청이 타입오브 클릭 이벤트 요청도 이벤트
  //   접속이라는 브라우저 형태로 바뀐것 뿐
  response.writeHead(200, { "contant-Type": "text/html" });

  let doc = "<html> <head> <body> <h1> hello </h1></body> </head></html>";
  response.end(doc);
});

server.listen(1234);
//1234 포트에 귀를 기울인다 클라이언트가 문을 두드리면
// 요청을 받게 된다면
