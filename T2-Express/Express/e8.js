var express=require ("express");
var app=express();

app.get("/data",function(req,res){
    name=req.query.name;
    age=req.query.age;
    res.send("Name: "+name+" Age: "+age);
});

app.listen(3100,()=>{
    console.log("Running");
});