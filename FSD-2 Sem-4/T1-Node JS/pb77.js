var fs = require("fs");

// fs.mkdirSync("Hello");

fs.writeFileSync("Hello/abc.txt", "File written\n");
fs.appendFileSync("Hello/abc.txt", "File Appended");

var data = fs.readFileSync("Hello/abc.txt", "utf-8");
console.log(data);

fs.renameSync("Hello/abc.txt", "Hello/xyz.txt");

fs.unlinkSync("Hello/xyz.txt");

fs.rmdirSync("Hello");