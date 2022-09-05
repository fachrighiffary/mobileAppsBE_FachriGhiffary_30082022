const logRouter = require("express").Router();
const logController = require("../controllers/log");

logRouter.post("/ApiRequest", logController.apiRequest);
logRouter.post("/ApiResponse", logController.apiResponse);

module.exports = logRouter;
