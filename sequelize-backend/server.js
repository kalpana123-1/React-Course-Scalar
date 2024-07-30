const express = require("express");
const mysql = require("mysql2");
const sequelize = require("sequelize");
const app = express();
const db = require("./models");
const { User } = require("./models");

app.get("/select", (req, res) => {
  User.findAll()
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/insert", (req, res) => {
  User.create({
    firstName: req.firstName,
    lastName: req.lastName,
    email: req.email,
    age: req.age,
    password: req.password,
    gender: req.gender,
    phone: req.phone,
  })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/update", (req, res) => {
  User.update({
    firstName: req.firstName,
    lastName: req.lastName,
    email: req.email,
    age: req.age,
    password: req.password,
    gender: req.gender,
    phone: req.phone,
  })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/delete", (req, res) => {
  User.destroy({
    where: {
      id: req.id,
    },
  })
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
    app.listen(4000, () => {
      console.log("Server started on port 4000");
    });
  })
  .catch((err) => console.log(err));
