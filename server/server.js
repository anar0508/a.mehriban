const express = require("express");
const mysql = require("mysql");
const path = require("path");
const cors = require("cors");
const util = require("util");
const ImgQueries = require('./ImgQueries');
const MessageQueries = require('./messageQueries');
const AdminQueries = require('./adminQueries');
const multer = require("multer");

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
const upload = multer({ dest: './server/images' });

app.get('/api/image', (req, res) => {
  ImgQueries.getImages(query, connection, req, res);
});

app.get('/api/image/:id', (req, res) => {
  ImgQueries.getImage(query, connection, req, res);
});

app.post('/api/image', upload.single('photo'), (req, res) => {
    ImgQueries.loadImage(query, connection, req, res, sizeOf);
  });

  app.post('/api/message', upload.any(), (req, res) => {
    MessageQueries.postMessage(query, connection, req, res);
  });

  app.post('/api/register', upload.any(), (req, res) => {
    AdminQueries.register(query, connection, req, res);
  });

  app.post('/api/login', upload.any(), (req, res) => {
    AdminQueries.login(query, connection, req, res);
  });
  
  app.get('/*', function (_req, res) {
    res.sendFile(path.resolve('build/index.html'));
});

let port = process.env.PORT;
if (port == null || port === "") {
  port = 8000;
}
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});