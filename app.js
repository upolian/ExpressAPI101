const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const PORT = 3000;

//middleware
app.use(express.json());

// connect to db and start server

mongoose.connect(process.env.DB_URI, () => {
  //server
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  console.log("connected to db");
});

//routes
app.get("/", (req, res) => {
  res.send("Home!");
});

app.get("/blogs", (req, res) => {
  res.send("Blog page");
});

app.post("/", (req, res) => {
  res.send(req.body);
});
