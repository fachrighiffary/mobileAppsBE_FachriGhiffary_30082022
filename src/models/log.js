const db = require("../configs/mySQL");

module.exports = {
  apiRequest: body => {
    return new Promise((resolve, reject) => {
      const qs = `INSERT INTO T_LOG_APIREQUEST SET ?`;
      db.query(qs, body, (err, data) => {
        console.log(err);
        if (!err) {
          resolve({
            status: "Success",
            statusCode: 200
          });
        } else {
          reject({
            status: "Error",
            statusCode: 500
          });
        }
      });
    });
  },
  apiResponse: body => {
    return new Promise((resolve, reject) => {
      const qs = `INSERT INTO T_LOG_APIRESPONSE SET ?`;
      db.query(qs, body, (err, data) => {
        if (!err) {
          resolve({
            status: "Success",
            statusCode: 200
          });
        } else {
          reject({
            status: "Error",
            statusCode: 500
          });
        }
      });
    });
  }
};
