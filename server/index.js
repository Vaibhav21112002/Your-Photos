const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config("/.env");
const db = require("./db/index.js");
const postRoutes = require("./routes/posts-routes")
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api/posts", postRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
});
