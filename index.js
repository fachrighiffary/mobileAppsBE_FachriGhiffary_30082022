require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const logger = require("morgan");

const cors = require("cors");
const mainRouter = require("./src/routes");

const app = express();
const port = PORT || 8080;

app.use(express.static("public"));
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`);
});

module.exports = app;
