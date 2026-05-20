// write an express js to set cookies of submitted values perform following task
// 1.create an html file which contains a form with fields first name,last name,password and a submit button
// 2.once form sumitted store these entered values to the respective cookies one /next page
// 3.then redirect user to /admin page and clear the cookie set for the last name 
// 4.display remaining set of cookie on this page using post method
express=require('express')
app=express()
cp=require('cookie-parser')
app.use(cp())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname,{index:"task.html"}))
app.post("/next",(req,res)=>{
    res.cookie("firstName",req.body.fname)
    res.cookie("lastname",req.body.lname)
    res.cookie("password",req.body.pass)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie("lastname")
    res.send("First Name: "+req.cookies.firstName+" Last Name: "+req.cookies.lastname+" Password: "+req.cookies.password)
})
app.listen(3005,()=>{
    console.log("runinng.......... on http://localhost:3005");
})
