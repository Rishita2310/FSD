// write node js script to perform the below task
// 1. write below object in f2.txt 
//     {d:{a:10,b:20,c:[30,10]}}
// 2. Read data from the same file and perform following task
//     a. Addition of a and b
//     b. Subtraction of 2nd element of c and b (must be a +ve number)
//     c. multiplication of element of c
// 3. Add the o/p of addtion,Subtraction and multiplication in fs.txt file

data={d:{a:10,b:20,c:[30,10]}}
var fs=require("fs")
fs.writeFileSync("f2.txt",JSON.stringify(data))
data=fs.readFileSync("f2.txt","UTF-8")
data=JSON.parse(data)
add=data.d.a+data.d.b
sub=data.d.c[1]-data.d.b
mul=data.d.c[0]*data.d.c[1]
sub=Math.abs(sub)
fs.appendFileSync("f2.txt","\nAddition of a and b is "+add)
fs.appendFileSync("f2.txt","\nSubtraction of 2nd element of c and b is "+sub)
fs.appendFileSync("f2.txt","\nMultiplication of elements of c is "+mul)
data=fs.readFileSync("f2.txt","UTF-8")
console.log(data)