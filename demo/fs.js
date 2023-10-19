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

const filePath = path.join(__dirname, "test", "test.txt");

// createDir();

// fs.writeFile(filePath, "Hello NodeJS", (err) => {
//   if (err) throw err;
//   console.log("file created");
// });

// fs.appendFile(filePath, "\nHello baby", (err) => {
//   if (err) throw err;
//   console.log("file appended");
// });

fs.readFile(filePath, "utf-8", (err, data) => {
  // if (err) throw err;
  // const content = new Buffer.from(data);
  // console.log(content.toString());
  console.log(data);
});
