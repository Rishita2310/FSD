// write a nodeJS program using the events module to stimulate a sequence of events.
// 1. when a connection events occur print connection successfully and trigger a data received events
// 2. when  the data received event occur print data recieved succesfully 
// 3.finally print thanks at the end of execution

const ee=require("events");
e1=new ee();
e1.on("connection",()=>{
    console.log("connection successfully");
    e1.emit("data received");
})
e1.on("data received",()=>{
    console.log("data received successfully");
    console.log("thanks");
})
e1.emit("connection");