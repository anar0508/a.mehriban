const path = require("path");
const express = require("express");
const fs = require("fs");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
var cors = require("cors");
const util = require("util");
const ImgQueries = require('./imgQueries.js');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("build")));

const connection = mysql.createPool(
  "mysql://n51ka40pa95rinhx:dqsztmz4kd3yck4x@w1kr9ijlozl9l79i.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/eholvy5hswlfqh9r"
);
const sizeOf = util.promisify(require('image-size'));
const query = util.promisify(connection.query).bind(connection);


app.get('/api/images', (req, res) => {
  ImgQueries.getImages(query, connection, req, res);
});

app.post('/api/image', (req, res) => {
  ImgQueries.getImages(query, connection, req, res, sizeOf);
});

app.get("/api/image/:id", (req, res) => {
  const name = req.query.name;
  try {
    let fileName = "images/" + name;
    res.sendFile(path.join(__dirname, fileName));
  } catch (error) {
    console.log("err");
    res.status(400).send(error);
  }
});

app.get('/*', function (_req, res) {
    res.sendFile(path.resolve('build/index.html'));
});

let port = process.env.PORT;
if (port == null || port === "") {
  port = 8000;
}
app.listen(port, function () {
});
