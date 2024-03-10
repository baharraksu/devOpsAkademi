"use strict";
const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: "user",
  host: "db",
  database: "app",
  password: "password",
  port: 5432,
});

const app = express();

app.use(express.json()); // JSON verilerini işlemek için
app.use(express.urlencoded({ extended: true })); // URL-encoded verileri işlemek için

pool.connect((err, client, done) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected");
    done();
  }
});
//deneme anasayfa
app.get("/", (req, res) => {
  res.send("Hello, this is the home page!");
});


// Öğrenci ekleme endpoint'i
app.post("/students/add", (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;

    pool.query(
      "INSERT INTO students (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING id",
      [first_name, last_name, age],
      (err, results) => {
        if (err) {
          console.error("Database query error: ", err);
          res.status(500).json({
            status: "error",
            message: "Failed to insert student data",
          });
        } else {
          const studentId = results.rows[0].id;
          console.log("Data inserted successfully");
          res.status(201).json({
            status: "success",
            message: "Student added successfully",
            student_id: studentId,
          });
        }
      }
    );
  } catch (error) {
    console.error("Error while processing request:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});
app.get("/students", (req, res) => {
  pool.query("SELECT * FROM students", (err, results) => {
    if (err) {
      console.error("Database query error: ", err);
      res.status(500).json({
        status: "error",
        message: "Failed to fetch students data",
      });
    } else {
      console.log("Students data fetched successfully");
      res.status(200).json({
        status: "success",
        students: results.rows,
      });
    }
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});