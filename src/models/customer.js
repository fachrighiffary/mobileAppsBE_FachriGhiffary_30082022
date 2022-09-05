const db = require("../configs/mySQL");

module.exports = {
  saveCustomer: newBody => {
    return new Promise((resolve, reject) => {
      const qs = "INSERT INTO T_DATA_CUSTOMER set ?";
      db.query(qs, newBody, (err, data) => {
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
  getAllDataCust: () => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT customer.CUST_ID, customer.FIRST_NAME, customer.LAST_NAME, branch.BRANCH_NAME, product.PRODUCT_NAME, customer.TENOR_ID, customer.AVATAR FROM T_DATA_CUSTOMER AS customer JOIN M_PRODUCT as product ON product.PRODUCT_ID = customer.PRODUCT_ID JOIN M_BRANCH as branch on branch.BRANCH_ID = customer.BRANCH_ID;";
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
  },
  getDataCust: id => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT customer.CUST_ID, customer.FIRST_NAME, customer.LAST_NAME,customer.PHONE_NO, product.PRODUCT_NAME , branch.BRANCH_NAME, customer.TENOR_ID FROM T_DATA_CUSTOMER as customer JOIN M_PRODUCT as product ON product.PRODUCT_ID = customer.PRODUCT_ID JOIN M_BRANCH as branch ON branch.BRANCH_ID = customer.BRANCH_ID WHERE customer.CUST_ID = ?";
      db.query(qs, id, (err, data) => {
        if (!err) {
          resolve({
            status: "Success",
            statusCode: 200,
            data: data
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
  updateDataCustomer: (newBody, id) => {
    return new Promise((resolve, reject) => {
      const qs = `UPDATE T_DATA_CUSTOMER SET ? WHERE CUST_ID = ?`;
      db.query(qs, [newBody, id], (err, data) => {
        if (!err) {
          resolve({
            status: "Success",
            statusCode: 200,
            data: data
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
  deleteDataCustomer: id => {
    return new Promise((resolve, reject) => {
      const qs = `DELETE FROM T_DATA_CUSTOMER WHERE CUST_ID = ?`;
      db.query(qs, id, (err, data) => {
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
