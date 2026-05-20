// create the web server that excepts a get request with dynamic user id in the url
// also excepts additional data name and age using query parameters extract id from root parameter
// name and age from query strings returns a json responce contaning all recive data

// var e7=require("express")
// var app=e7()
// app.get("/user/:n",(req,res)=>{
//     id=req.params.n
//     name=req.query.name
//     age=req.query.age
//     data={
//         "id":id,
//         "name":name,
//         "age":age
//     }
//     res.write(JSON.stringify(data))
//     res.send()
// })
// app.listen(3005,()=>{
//     console.log("runing.....");
// })


// create the web server that excepts a get request with dynamic user id in the url
// also excepts additional data name and age using query parameters extract id from root parameter
// name and age from query strings returns a json responce contaning all recive data

var express = require('express');
var app = express();

app.get("/user/:id", (req, res) => {
    id = req.params.id
    name = req.query.name
    age = req.query.age
    res.json({ id: id, name: name, age: age })
})

app.listen(3005, () => {
    console.log("Server is running on port 3005")
})