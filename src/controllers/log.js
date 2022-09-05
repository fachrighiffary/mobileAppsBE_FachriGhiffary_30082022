const logModel = require("../models/log");
const date = new Date(Date.now());
module.exports = {
  apiRequest: (req, res) => {
    const { body } = req;
    const newbody = {
      ...body,
      DTM_CRT: date,
      REQUEST_DATE: date
    };
    logModel
      .apiRequest(newbody)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  },
  apiResponse: (req, res) => {
    const { body } = req;
    const newbody = {
      ...body,
      DTM_CRT: date,
      RESPONSE_DATE: date
    };
    logModel
      .apiResponse(newbody)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
