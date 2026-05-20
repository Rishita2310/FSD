// write the script to meet following requirements
// 1. create one index.html file which contains username password ,login button and open on local host 
// after clicking button it should jump on /save page 
// store username and password in session after saving redirected to /fetch page and read value put a logout link here 
// jump on /deletesession page after clicking logout link , destroy the session and redirect to index.html page
const express = require("express");
const session = require("express-session");
app = express();

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"KP"
}))
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname,{index:"index1.html"}))

app.post("/save",(req,res)=>{
    req.session.username=req.body.name
    req.session.password=req.body.password
    res.redirect("/fetch")
})
app.get("/fetch",(req,res)=>{
    res.type("text/html")
    res.write("Username: "+req.session.username+"<br>")
    res.write("Password: "+req.session.password+"<br>")
    res.write('<a href="/deletesession">Logout</a>')
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})
app.listen(3005,()=>{
    console.log("runinng.......... on http://localhost:3005/");
})
