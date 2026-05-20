// read data from file and arrange that data in ascending order 
var fs=require("fs")
fs.writeFileSync("data.txt","50,-1,99,100,20,0")
data=fs.readFileSync("data.txt","UTF-8")
arr=data.split(",")
arr.sort(function(a,b){return a-b})
console.log(arr)