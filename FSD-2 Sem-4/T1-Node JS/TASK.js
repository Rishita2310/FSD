// write node js to create 2 listener for a common event
// print no. of events associated with an emitter
// remove one of the listener and call reammining listener again also print no. of reammining listeners
// at the end remove all listeners and count the listeners again

const e = require("events");
e1 = new e();
x = function f1() {
  console.log("List 1");
};
y = function f2() {
  console.log("List 2");
};
e1.on("event1", x);
e1.on("event1", y);
count = e1.listenerCount("event1");
console.log(count);
e1.removeListener("event1", x);
e1.emit("event1");
e1.emit("event2");
count = e1.listenerCount("event1");
console.log(count);
