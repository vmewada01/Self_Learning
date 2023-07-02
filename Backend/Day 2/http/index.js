const http = require("http");
const server = http.createServer((req, res) => {
  // res.write("hello ")
  // res.end("World")
  if (req.method === "GET") {
    if (req.url === "/posts") {
      res.end(JSON.stringify([{ name: "vishal" }, { name: "jatin" }]));
    } else if (req.url === "/todos") {
      res.setHeader("content-type", "application/json");
      res.end("here sjdflk is your todos");
    } else if (req.url === "/") {
      // res.setHeader("content-type","text/plain")
      res.setHeader("content-type", "text/html");
      return res.end("<h1>Welcome to the home page</h1>");
    } else {
      res.end("Invalid Routes");
    }
  }

 if(req.method ==="POST"){
    if(req.url ==="/"){
        let str=""
        res.on("data",function(packet){
            str += packet
        })
    }
    req.on("end", ()=> {
        fs.writeFileSync("./dummy.txt", str, {encoding: "utf-8"})
        res.end("we have written the file")
    })
 }

});

server.listen(8080, () => {
  console.log("server started on localhost:8080/");
});
