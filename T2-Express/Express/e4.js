var express=require('express');
var app=express();
employee={name:"Alice",age:30,designation:"Manager"};
app.get("/home",function(req,res){
//   res.write(JSON.stringify(student));
//   res.send();
res.send(employee);
});

app.get("/about",function(req,res){
  res.write(employee.designation+" "+employee.name+" is "+employee.age+" years old" );
  res.send();
});

app.get("/contact",function(req,res){
    res.send(employee.name);
});
app.listen(3100);