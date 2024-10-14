require("dotenv").config();
const { PORT = 3000, DBURL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/db")

db()

mongoose.connect(DBURL);
mongoose.connection
  .on("open", () => console.log(" connected to mongoose"))
  .on("close", () => console.log(" disconnected from mongoose"))
  .on("error", (error) => console.log(error));


app.get("/", (req, res) => {
  res.send("hello world");
});


// app.post('/')

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));