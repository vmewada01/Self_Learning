const express = require("express");

const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Home Page..!!");
});

app.get("/product", (req, res) => {
  // console.log(req.body)
  let file = fs.readFileSync("./db.json", { encoding: "utf-8" });
  let paresedFile = JSON.parse(file);
  let data = paresedFile;
  // console.log(paresedFile.products)

  res.send(data);
});

app.post("/product", (req, res) => {
  let file = fs.readFileSync("./db.json", { encoding: "utf-8" });
  let paresedFile = JSON.parse(file);

  paresedFile.products.push(JSON.stringify(req.body));
  //console.log(fetchReq.products)
  paresedFile = JSON.stringify(paresedFile);
  // console.log(paresedFile)
 

  fs.writeFileSync("./db.json", paresedFile, { encoding: "utf-8" });
  res.send("post request made");
});

app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  //console.log(id)
  let file = fs.readFileSync("./db.json", { encoding: "utf-8" });
  file = JSON.parse(file);
  let data = file.products;
  console.log(id);
  const index = data.findIndex((item) => +(item.id) == Number(id));
  console.log(index);

  if (index !== -1) {
    data[index].items = "vegitable";
    data[index].status = false;
  }

  res.send("it is working as post req" + id);
});

// const dns = require("dns")

// const website = "http://localhost:8000/";

// dns.lookup(website,(err,address,family)=> {
//     console.log("address of family is ", website, address, family)
// })



app.listen(8000, () => {
  console.log("server is running fine at 8000 port");
});
