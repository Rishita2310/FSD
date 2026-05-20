const express=require("express")
const app=express()
const addName=(req,res,next)=>{
    req.name="XYZ"
    console.log("Name Added");
    next()
}
const collageName=(req,res,next)=>{
    req.collage="LJU"
    console.log("Collage name added");
    next()
}
const addMarks=(req,res,next)=>{
    req.marks=90
    console.log("Marks added");
    next()
}
app.get("/student",addName,collageName,addMarks,(req,res)=>{
    res.send(`Name: ${req.name} <br> Collage: ${req.collage} <br> Marks: ${req.marks}`)
})
app.listen(3005,()=>{
    console.log("runnig.........");
    
})