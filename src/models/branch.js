const db = require("../configs/mySQL");

module.exports = {
  getBranch: () => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT BRANCH_ID as id, BRANCH_NAME as label FROM M_BRANCH";
      db.query(qs, (err, data) => {
        if (!err) {
          if (data.length > 0) {
            resolve({
              status: "Success",
              statusCode: "200",
              data: data
            });
          } else {
            reject({
              status: "Success",
              statusCode: 400,
              data: err
            });
          }
        } else {
          reject({
            status: "Server Error",
            statusCode: 500,
            data: err
          });
        }
      });
    });
  }
};
