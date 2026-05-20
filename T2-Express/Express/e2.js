var express=require('express');
var app=express();
app.get("/",function(req,res){
  res.type("text/plain");
  res.send('<h1>Heyyy youu</h1>');
});
app.get("/about",(req,res)=>{
  res.type("text/html");
//   res.write("<h1>yess youuu</h1>");
  res.send('<h1>Be Happyyy</h1>');
});
app.listen(3100,()=>{
    console.log("Running");
});