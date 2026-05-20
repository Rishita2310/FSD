var express=require('express');
var app=express();
student={name:"John",age:20};
app.get("/student",function(req,res){
//   res.write(JSON.stringify(student));
//   res.send();
res.send(student);
});
app.listen(3100);