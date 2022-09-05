const express = require("express");

const WelcomeRouter = express.Router();

WelcomeRouter.get("/", (req, res) => {
  res.send("WELCOME TO API TEST MOBILE");
});

module.exports = WelcomeRouter;
