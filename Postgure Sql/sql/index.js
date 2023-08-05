const express = require("express");
const app = express();
const studentRoutes = require("./students/routes");

app.use(express.json());

app.get("/", (req, res) => res.send("welcome to the homepage"));

app.use("/api/v1/students",studentRoutes);


app.listen(8575, () => {
  console.log("Listening at port 8575");
});
