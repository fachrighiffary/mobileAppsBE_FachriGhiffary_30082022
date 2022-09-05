const mysql = require("mysql2");
const { DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASS,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
console.log("Database Connected");

module.exports = db;
