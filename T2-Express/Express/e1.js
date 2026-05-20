
var express=require('express');
var app=express();
app.get('/',function(req,res){
  res.set("content-type","text/html");
  res.send('Hello World');
});
app.listen(3000);
    