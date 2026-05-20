// write node js to handle events as ask below
// 1. check the radius is negative or not
// if negative then display it must be positive and calc peri of circle
// 2. check side is negative or not if neg then display it must be positive and calc peri of side.
const e = require("events");
e1 = new e();
e1.on("eradius", () => {
  console.log("Radius must be positive");
});
e1.on("nside", () => {
  console.log("Side must be positive");
});
e1.on("find", (r, s) => {
  if (r < 0) {
    e1.emit("eradius");
  } else {
    cperi = 2 * 3.14 * r;
    console.log(cperi);
  }
  if (s < 0) {
    e1.emit("nside");
  } else {
    speri = 4 * s;
    console.log(speri);
  }
});
e1.emit("find", 10, 3);
