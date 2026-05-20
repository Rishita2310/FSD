const express=require("express")
const app=express()
app. use(express.static(__dirname))               //true: querystring library, false: querystring module
app.get("/process",( req, res )=>{
    fname=req.query.fname
    lname=req.query.lname
    console.log(req.query);
    res.send("Welcome "+fname+" "+lname)
    })
app.listen(3005,()=>{
    console.log("runnig.........");
})