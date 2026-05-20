const express=require("express")
const app=express()
app. use(express.urlencoded({extended:true}))               //true: querystring library, false: querystring module
app.get("/",( req, res )=>{
    res.send(`<h1>User Form!</h1>
        <form action="/user" method="post">
            <input type="text" name="t1" placeholder="Enter your name">
            <button type=submit>Submit</button>
        </form>`)
    })

app.post("/user",(req,res)=>{
    name=req.body.t1
    res.send("Name: "+name)
})

app.listen(3005,()=>{
    console.log("runnig.........");
    
})