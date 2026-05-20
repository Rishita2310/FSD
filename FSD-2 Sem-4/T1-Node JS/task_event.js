// write nodeJS to create 2 listeners for a common event
// print number of events associated with an emitter
// remove 1 of the listeners and call remaining listeners again
// also print number of remaining listeners
//at the end remove all listeners and count the listners again
const ee=require("events")
e1=new ee()
x=()=>{
    console.log("Listener 1")
}
y=()=>{
    console.log("Listener 2")
}
e1.on("event1",x)
e1.on("event1",y)
count=e1.listenerCount("event1")
console.log(count)
e1.removeListener("event1",x);
e1.emit("event1")
count=e1.listenerCount("event1")
console.log(count)
e1.removeAllListeners("event1")
count=e1.listenerCount("event1")
console.log(count)