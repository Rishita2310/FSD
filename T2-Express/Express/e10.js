const express=require("express")
const app=express()
app. use(express.urlencoded({extended:true}))               //true: querystring library, false: querystring module
app.get("/",( req, res )=>{
    res.send(`<h1>User Form!</h1>
        <form action="/result" method="post">
            <input type="number" name="t1" placeholder="Enter your Marks of T1">
            <input type="number" name="t2" placeholder="Enter your Marks of T2">
            <input type="number" name="t3" placeholder="Enter your Marks of T3">
            <input type="number" name="t4" placeholder="Enter your Marks of T4">
            <button type=submit>Average</button>
        </form>`)
    })

app.post("/result",(req,res)=>{
    total=parseInt(req.body.t1)+parseInt(req.body.t2)+parseInt(req.body.t3)+parseInt(req.body.t4)
    res.send("Avg : "+(total/4))
})

app.listen(3005,()=>{
    console.log("runnig.........");
})