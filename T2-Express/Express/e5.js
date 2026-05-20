var express=require('express');
var app=express();
student={
    u1:[{name:"LJU",id:2},
    {name:"LJU2",id:3},
    {name:"LJU3",id:4}]
}
app.get("/student",function(req,res){
    res.set("content-type","text/html");
    res.write("<table border=1><tr><th>Name</th><th>ID</th></tr>");
    for(i=0;i<student.u1.length;i++){
        res.write("<tr><td>"+student.u1[i].name+"</td><td>"+student.u1[i].id+"</td></tr>");
    }
    res.write("</table>");

    res.send();
});
app.listen(3100);