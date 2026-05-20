// write a node js program using the events module to stimule to sequence of event.
// 1. when a connection event occur print connection successfully and trigger a data recieve event
// 2. when data recieved event occur print data received successfully
// 3. finally print thanks at the end
const myevent = require("events");
e1 = new myevent();
e1.on("Connection", (e) => {
  console.log("Connection Successfully!");
  e1.emit("Data received");
});
e1.on("Data received", (e) => {
  console.log("data received Successfully!");
  console.log("Thanks...");
});
e1.emit("Connection");
