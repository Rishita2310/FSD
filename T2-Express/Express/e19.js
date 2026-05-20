// 1. html form with username,pass and submit button,use post method 
// 2. onvisiting / show the form
// 3. on submitting if username is admin then display "Welcome Admin" otherwise display
//  "Is login with admin name and link back the admin form"
const express=require("express")
const app=express()
app. use(express.urlencoded({extended:true}))               //true: querystring library, false: querystring module
app.get("/",( req, res )=>{
    res.send(`<h1>User Form!</h1>
        <form action="/user" method="post">
            <input type="text" name="nm" placeholder="Enter your name">
            <input type="password" name='pass' placeholder="Enter your password">
            <button type=submit>Submit</button>
        </form>`)
    })

app.post("/user",(req,res)=>{
    res.set("content-type","text/html")
    const name=req.body.nm
    if(name=="admin"){
        res.write("Welcome Admin")
    }else{
        res.write("Is login with admin name and <a href='/'>link back the admin form</a>")
    }
    res.send()
})

app.listen(3005,()=>{
    console.log("runnig.........");
    
})