// dependecies
require("dotenv").config();
const { PORT = 3000, DBURL } = process.env;
const express = require("express");
const app = express();
const multer = require('multer')
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// file dest
const upload = multer ({dist : '/uploads'})
const user = require("./routes/auth.js")
const connectDB = require("./config/db.js");
const UploadsRouter = require('./picmedia/files.js')

// middleware
app.use(bodyParser.json())

// routers

app.use('/api', UploadsRouter)

// database callback
connectDB()

  
// app.post('/api/upload' , upload.single('avatar'), (req , res) => {
//   res.json(req.file)
// })
  
app.get("/", (req, res) => {
  res.send("hello world");
});
  
  

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));