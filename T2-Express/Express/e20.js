express=require('express')
app=express()
cp=require('cookie-parser')
app.use(cp())
app.get("/cookie",function(req,res){
    res.cookie("name","Express JS")
    res.cookie("fname","Kashyap")
    res.cookie("lname","Patel")
    res.cookie("ID","1",{expires:new Date(Date.now()+10000)})
    res.cookie("mail","kashyap@gmail.com",{maxAge:5000})
    res.clearCookie("ajs_anonymous_id")
    res.clearCookie("csrftoken")
    res.send(req.cookies)
})
app.listen(3005,()=>{
    console.log("runinng.......... on http://localhost:3005/cookie");
})
