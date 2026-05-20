var fs = require("fs");
var EventEmitter = require("events");
var http = require("http");

var e = new EventEmitter();
let fileData = "";

// create
e.on("create", () => {
    fs.writeFile("abc.txt", "write file\n", (err) => {
        if (err) throw err;

        console.log("File Created");
        e.emit("append");
    });
});

// append
e.on("append", () => {
    fs.appendFile("abc.txt", "append file", (err) => {
        if (err) throw err;

        console.log("File appended");
        e.emit("read");
    });
});

// read
e.on("read", () => {
    fs.readFile("abc.txt", "utf-8", (err, data) => {
        if (err) throw err;

        console.log("File read");
        fileData = data;
    });
});

// run sequence ONCE
e.emit("create");

// server only displays data
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fileData || "Loading...");
}).listen(3520);