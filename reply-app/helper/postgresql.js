"use strict";
const { Pool } = require("pg");

const pool = new Pool({
  user: "user",
  host: "db", 
  database: "app",
  password: "password",
  port: 5432,
});

pool.connect((err, client, done) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
    done();
  }
});

module.exports = pool;