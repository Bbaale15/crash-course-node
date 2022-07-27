// Createing a server

// const http = require("http");
// const HOSTNAME = process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });

// Reading a file
// const fs = require("fs");

// fs.readFile("hi.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// console.log("Log from outside function");

// Writing a file

// Can use appendFile instead of the flags.

// const { writeFileSync, writeFile } = require("fs");

// const newContent = "\nThis is some new text";

// writeFile("hi.txt", newContent, { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Content written");
// });

// Rename File
// const { rename } = require("fs");
// rename("hi.txt", "hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File renamed");
// });

// Unlink is for deleting files
// const { unlink } = require("fs");
// unlink("hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("File removed");
// });

// ES6 Modules
// import { addNum } from "./addNum.js";
// const sum = addNum(2, 2);
// console.log(sum);

// Createing a server with html

const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  let path = "./";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;

      // Redirect instead...
      // res.setHeader("Location", "/");
      // res.statusCode = 301;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}/`);
});
