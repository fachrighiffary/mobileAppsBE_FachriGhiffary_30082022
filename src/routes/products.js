const productRouter = require("express").Router();
const productController = require("../controllers/products");

productRouter.get("/", productController.getProduct);

module.exports = productRouter;
