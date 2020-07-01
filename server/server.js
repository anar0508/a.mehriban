const path = require("path");
const express = require("express");
const fs = require("fs");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
var cors = require("cors");
const util = require("util");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("build")));

const connection = mysql.createPool(
  "mysql://n1bvu94c8s6v7r6x:mirl9x26jbjnymyp@w1kr9ijlozl9l79i.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/ijcooavc5xu8fyo0"
);
const query = util.promisify(connection.query).bind(connection);

app.get("/api/images", (req, res) => {
  const directoryPath = path.join(__dirname, "images");
  try {
    fs.readdir(directoryPath, function (err, files) {
      res.send(files);
    });
  } catch (error) {
    console.log("something is wrong");
  }
});

app.get("/api/image", (req, res) => {
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
  console.log("Example app listening on port 8000!");
});
