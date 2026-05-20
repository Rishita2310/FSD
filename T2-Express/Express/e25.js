// Write express js script to perform following tasks.
// 1. Create one html file which contains one text field for name, email field and checkbox for subscription.
// Html file will be loaded on home page. Email and name fields are required fields.
// 2. On login page welcome user and email id data should be printed.
// a. If user checked the subscription then “Thank you for the subscription” message will be printed
// and “logout” link will be displayed under the message. If user clicks logout link then he/she will
// be redirected to the home page.
// b. If user has not opted for the subscription then “You can subscribe to get daily updates” message
// will be printed and “subscribe” link will be displayed under the message.
// c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page
// “Thank you for the subscription” message will be printed and “logout” link will be displayed
// under the message. If user clicks logout link then he/she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get/post).

const express = require("express");
app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname,{index:"index2.html"}))

app.post("/login",(req,res)=>{
    res.type("text/html")
    name=req.body.name
    email=req.body.email
    subscription=req.body.subscription
    res.write("Welcome "+name+"<br>")
    res.write("Your email id is "+email+"<br>")
    if(subscription){
        res.write("Thank you for the subscription<br>")
        res.write('<a href="/">Logout</a>')
    }else{
        res.write("You can subscribe to get daily updates<br>")
        res.write('<a href="/subscription">Subscribe</a>')
    }
    res.send()
})
app.get("/subscription",(req,res)=>{
    res.type("text/html")
    res.write("Thank you for subscription")
    res.write('<a href="/">Logout</a>')

})
app.listen(3005,()=>{
    console.log("runinng.......... on http://localhost:3005/");
})
