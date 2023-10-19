//!file ststem
const fs = require("fs");
const path = require("path");

const createDir = () => {
  fs.mkdir(path.join(__dirname, "test"), (err) => {
    if (err) throw err;
    console.log("directory successfully created!");
  });
};

const removeDir = () => {
  fs.mkdir(path.join(__dirname, "test"), (err) => {
    if (err) throw err;
    console.log("directory successfully created!");
  });
};
