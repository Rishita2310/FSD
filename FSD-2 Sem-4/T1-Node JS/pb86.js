var event = require("events");

var e = new event();

e.on("Welcome", () => {
    console.log("Welcome to nodejs");
    e.emit("time");
});

e.on("time", () => {
    console.log(new Date());
    e.emit("bye");
});

e.on("bye", () => {
    console.log("Goodbye!");
});

e.emit("Welcome");