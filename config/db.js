require("dotenv").config();
const mongoose = require('mongoose')
const DB = process.env.DBURL

const db = async () => {
    try {
        await mongoose.connect(DB)
    } catch (error) {
        console.error('mongo error')
    }
  
};

module.exports = db