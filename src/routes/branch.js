const branchRouter = require("express").Router();
const branchController = require("../controllers/branch");

branchRouter.get("/", branchController.getBranch);

module.exports = branchRouter;
