const customerModel = require("../models/customer");
const date = new Date(Date.now());

module.exports = {
  saveCustomer: (req, res) => {
    const { body } = req;
    const newBody = {
      ...body,
      USR_CRT: body.FIRST_NAME,
      USR_UPD: body.FIRST_NAME,
      AVATAR: "https://i.pravatar.cc/50?u=",
      DTM_CRT: date,
      DTM_UPD: date
    };
    customerModel
      .saveCustomer(newBody)
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  },
  getAllDataCust: (req, res) => {
    customerModel
      .getAllDataCust()
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  },
  getDataCust: (req, res) => {
    const { id } = req.query;
    customerModel
      .getDataCust(id)
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  },
  updateDataCustomer: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const newBody = {
      ...body,
      USR_CRT: body.FIRST_NAME,
      USR_UPD: body.FIRST_NAME,
      DTM_UPD: new Date(Date.now())
    };
    customerModel
      .updateDataCustomer(newBody, id)
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  },
  deleteDataCustomer: (req, res) => {
    const { id } = req.params;
    customerModel
      .deleteDataCustomer(id)
      .then(result => {
        res.json({ ...result, date: date });
      })
      .catch(err => {
        res.json({ ...err, date: date });
      });
  }
};
