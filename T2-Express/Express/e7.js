var express=require ("express");
var app=express();

app.get('/calender/:day/event/:ename',function(req,res){
    res.send(req.params);
});

app.listen(3100,()=>{
    console.log("Running");
});