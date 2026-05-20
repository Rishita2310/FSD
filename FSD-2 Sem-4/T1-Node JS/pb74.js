var fs = require("fs");

fs.writeFileSync("new.txt", "This is data");
fs.appendFileSync("new.txt", "This is data");

var data = fs.readFileSync("new.txt", "utf-8");

console.log(data);
console.log("thanks");