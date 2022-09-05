const productModel = require("../models/products");
const date = new Date(Date.now());
module.exports = {
  getProduct: (req, res) => {
    productModel
      .getProduct()
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  }
};
