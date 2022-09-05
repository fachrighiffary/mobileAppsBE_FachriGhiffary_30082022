const express = require("express");
const mainRouter = express.Router();

const WelcomeRouter = require("./welcome");
const branchRouter = require("./branch");
const productRouter = require("./products");
const customerRouter = require("./customer");
const logRouter = require("./log");

mainRouter.use("/", WelcomeRouter);
mainRouter.use("/GetMasterBranch", branchRouter);
mainRouter.use("/GetMasterProduct", productRouter);
mainRouter.use("/customer", customerRouter);
mainRouter.use("/log", logRouter);

module.exports = mainRouter;
