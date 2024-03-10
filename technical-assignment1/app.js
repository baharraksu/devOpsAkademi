"use strict";
const express=require("express");
const dbConnection = require("./helper/mysql");

const app=express();

dbConnection.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection error: ", err);
    } else {
        console.log("Database connected");
    }
});
app.get("/students/add/:name/:age/:midterm/:final", (req, res) => {
    const { name, age, midterm, final } = req.params;
    const average = (parseInt(midterm) + parseInt(final)) / 2;
    dbConnection.query(
      "INSERT INTO students (name, age, midterm_grade, final_grade) VALUES (?, ?, ?, ?)",
      [name, age, midterm, final],
      (err, results, fields) => {
        if (err) {
          console.log("Database query error: ", err);
          res.status(500).json({
            status: "error",
            message: "Failed to insert Student data",
          });
        } else {
          console.log("Data inserted successfully");
          res.status(201).json({
            status: "success",
            message: "student data inserted successfully",
            student_id: results.insertId,
            average_grade: average,
          });
        }
      }
    );
  });
  
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });