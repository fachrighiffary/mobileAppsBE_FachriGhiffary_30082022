const customerRouter = require("express").Router();
const customerController = require("../controllers/customer");

customerRouter.post("/SaveDataCust", customerController.saveCustomer);
customerRouter.get("/GetAllDataCust", customerController.getAllDataCust);
customerRouter.get("/GetDataCustomer", customerController.getDataCust);
customerRouter.put(
  "/UpdateDataCust/:id",
  customerController.updateDataCustomer
);
customerRouter.delete(
  "/UpdateDataCust/:id",
  customerController.deleteDataCustomer
);

module.exports = customerRouter;
