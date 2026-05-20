const url = require("url");
add = "http://localhost:8080/default.html?year=2025&month=june";
q = url.parse(add, true);
process.noDeprecation = true;
console.log(q);
d = q.query;
console.log(d.year);
