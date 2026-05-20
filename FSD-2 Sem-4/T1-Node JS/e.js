// write node js using event handling to perform
// 1. create a folder named abc
//2. craete a file named xyz.txt and write data into it.
// 3. append data to that file and print msg
// 4. read the content of the file and print on console.
//5. copy content to xyz to pqr.txt
// 6. delete the file and last print the msg all op perform
// using sync

const fs = require("fs");
const e = require("events");
e1 = new e();

e1.on("folder", () => {
  if (!fs.existsSync("abc")) {
    fs.mkdirSync("abc");
    console.log("Folder created");
  } else {
    console.log("already exists");
  }
  e1.emit("file");
});
e1.on("file", () => {
  fs.writeFileSync("abc/xyz.txt", "Helloo");
  console.log("File written");
  e1.emit("append");
});
e1.on("append", () => {
  fs.appendFileSync("abc/xyz.txt", "Byeeee");
  console.log("file appended");
  e1.emit("read");
});
e1.on("read", () => {
  data = fs.readFileSync("abc/xyz.txt", "utf-8");
  console.log(data);
  e1.emit("copy");
});
e1.on("copy", () => {
  fs.copyFileSync("abc/xyz.txt", "abc/pqr.txt");
  console.log("file copied");
});
e1.emit("folder");
