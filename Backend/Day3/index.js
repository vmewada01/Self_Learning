const express = require("express")
const fs = require("fs")
const app = express();

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Welcome to homepage");
})
app.get("/product", (req,res)=> {
    const data=  fs.readFileSync("./db.json", {encoding:"utf-8"})
    const parsedData = JSON.parse(data)
   // console.log(parsedData)
    res.send(parsedData.list_items)
    console.log(parsedData.list_items)
})
app.post("/", (req, res)=> {
    // console.log(req.body)
     const file = fs.readFileSync("./db.json", {encoding: "utf-8"})
    // console.log(file.list_items)
  let parsedFile = JSON.parse(file)

  parsedFile.list_items.push(req.body)
  // console.log(updatedData)
 parsedFile = JSON.stringify(parsedFile)

 fs.writeFileSync("./db.json", parsedFile, {encoding:"utf-8"});
     res.send("your data is append succesfully")
     // res.send(JSON.stringify("<h1>Welcome to the posts request</h1>"))
})

app.listen(8080, ()=> {
    console.log("server is started on http://localhost:8080");
})
