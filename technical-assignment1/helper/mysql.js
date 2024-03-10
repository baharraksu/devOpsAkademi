const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "Key45031*",
  database: "work_app",
});

module.exports = connection;
