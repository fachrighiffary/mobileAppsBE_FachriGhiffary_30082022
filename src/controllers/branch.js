const branchModel = require("../models/branch");
const date = new Date(Date.now());

module.exports = {
  getBranch: (req, res) => {
    branchModel
      .getBranch()
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  }
};
