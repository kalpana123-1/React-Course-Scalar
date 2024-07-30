const express = require("express");
const mysql = require("mysql2");
const Sequelize = require("sequelize");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
