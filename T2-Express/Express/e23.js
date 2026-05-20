// write express js using seesion to display how many time user visited website
// if user is visiting the website for the first time then display "Welcome, Thank you for visiting our website"
// else display the count how many times user visited the website for that perticular session
const session = require("express-session");
express=require("express")
const app=express()
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"LJU123"
}))
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`You visited this page ${req.session.page_views} times`)
    }else{
        req.session.page_views=1
        res.send("Welcome, Thank you for visiting our website")
    }
})
app.listen(3005,()=>{
    console.log("runinng.......... on http://localhost:3005/");
})
