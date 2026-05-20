//write node js program to pass a url and calculate avg of 3 number pass as query parameter 

const url=require("url");
add="http://localhost:8080/test?m1=50&m2=60&m3=70";
q=url.parse(add,true)
process.noDeprecation=true;
console.log(q);
v1=parseInt(q.query.m1);
v2=parseInt(q.query.m2);
v3=parseInt(q.query.m3);
avg=(v1+v2+v3)/3;
console.log("Average is "+avg);