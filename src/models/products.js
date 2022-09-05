const db = require("../configs/mySQL");

module.exports = {
  getProduct: () => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT PRODUCT_ID as id, PRODUCT_NAME as label FROM M_PRODUCT";
      db.query(qs, (err, data) => {
        console.log(data);
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
