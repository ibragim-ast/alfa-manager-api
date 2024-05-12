require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/myapp", {})
  .then(() => {
    console.log("Подключение к базе данных успешно установлено");
  })
  .catch((err) => {
    console.error("Ошибка подключения к базе данных:", err);
  });

const allowedCors = [
  "https://praktikum.tk",
  "http://praktikum.tk",
  "localhost:3000",
];

const { PORT, BASE_PATH } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", require("./routes/users.js"));

app.use(function (req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://${BASE_PATH}:${PORT}`);
});
