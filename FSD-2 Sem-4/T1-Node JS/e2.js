const ee=require("events")
e2=new ee();
e2.on("Front",(start,end)=>{
    console.log(`The event is started at ${start} and ended at ${end}`);
});
e2.emit("Front","10:00","11:00");