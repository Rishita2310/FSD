// write a nodeJS program using event module.
// 1. registering multiple event listener for different events(myevent1,myevent2)
// 2. removing a specific event listener for myevent2
// 3. removing all listeners associated with myevent1
// 4. triggering and observing with listener execute.

const ee=require("events");
e1=new ee();   
y=function fun1(){
    console.log("myevent1 listener 1");
}     
e1.on("myevent1",y)
x= function fun2(){
    console.log("myevent1 listener 2");
}

e1.on("myevent1",x)
x1=function fun3(){
    console.log("myevent2 listener 1");
}
e1.on("myevent2",x1)
y1=function fun4(){
    console.log("myevent2 listener 2");
}
e1.on("myevent2",y1)
e1.removeListener("myevent2",x1);
e1.removeAllListeners("myevent1");
e1.emit("myevent1");
e1.emit("myevent2");