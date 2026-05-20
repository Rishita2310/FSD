//  ! print msg in next line spliting by dot and use get method to submit data html file contains form of textarea for the msg
// ! and submit button 
// and use get method to submit data
// html file contains a form of textarea for the message and submit button

const express=require("express")
const app=express()
app. use(express.static(__dirname,{index:"2.html"}))             //true: querystring library, false: querystring module
app.get("/spmsg",( req, res )=>{
    const msg=req.query.msg
    sm=msg.split(".")
    for (i in sm){
        res.write("<h1>"+sm[i]+"\n"+"</h1>")
    }
    res.send()
    })
app.listen(3005,()=>{
    console.log("runnig.........");
})