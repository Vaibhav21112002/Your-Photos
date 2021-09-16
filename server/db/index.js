const mongoose = require("mongoose");
require("dotenv").config("../.env");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
 

const db = mongoose.connection;

module.exports = db;