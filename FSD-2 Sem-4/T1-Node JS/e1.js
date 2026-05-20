const myevent=require("events")
ee=new myevent();
ee.on("greet",function(name){
    console.log("Hello "+name);
});
ee.emit("greet","Isha");