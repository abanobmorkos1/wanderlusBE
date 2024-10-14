const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = () => {
  const db = process.env.DBURL; // Access the DB URL from .env

  mongoose.connect(db);

  mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));
};

module.exports = connectDB;