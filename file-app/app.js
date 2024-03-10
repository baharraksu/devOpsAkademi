const fs = require("fs");
const express = require("express");

const app = express();

//read json file from local file system
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj = JSON.parse(data);

//write json file to local file system
dataObj.name = "Mehmet";
dataObj.age = 28;
const newData = JSON.stringify(dataObj);
fs.writeFileSync(`${__dirname}/data.json`, newData);

app.get("/student", (req, res) => {
  res.status(200).json({
    status: "success",
    data: dataObj,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});