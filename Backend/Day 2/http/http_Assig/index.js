const http = require("http");

const server = http.createServer((request, response) => {
  // response.write("user is in the Home directory  ")
  // response.write("the src of the folder is /   ")
  if (request.method === "GET") {
    if (request.url === "/") {
      response.setHeader("content-type", "text/html");
      response.write("<h1>Hello backend is destroying my mind currently</h>");
      response.write("<a href=/public>Go to the Public page</a>");
      response.end("");
    }
  } else if (request.url === "/public") {
    response.end("Welcome to the public directory");
  } else if (request.url === "/public/other") {
    response.end("show the content of public directory and its inside content");
  }
});

server.listen(8080, () => {
  console.log("server is working fine");
});
