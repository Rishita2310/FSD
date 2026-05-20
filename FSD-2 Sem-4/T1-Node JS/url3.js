// write nodejs script to print query string of url in url.txt file using callback

const url = require("url");
var fs=require("fs")
process.noDeprecation=true
add="http://localhost:8080/detail.html?name=John&age=30"
// q=url.parse(add,true)
// data=JSON.stringify(q.query)
q=url.parse(add,false)
data=q.query
fs.writeFile("url.txt",data,(err)=>{
    if(err){
        throw err
    }
    else
    {
        console.log("data written successfully")
    }
})