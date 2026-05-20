const express=require("express")
const app=express()
app. use(express.urlencoded({extended:true}))               //true: querystring library, false: querystring module
app.get("/",( req, res )=>{
    res.send(`<h1>User Form!</h1>
        <form action="/details" method="post">
            <input type="text" name="t1" placeholder="Enter your name"><br>
            Gender<br>
            <input type="radio" name="gender" value="Male">Male<br>
            <input type="radio" name="gender" value="Female">Female<br>
            <input type="radio" name="gender" value="Other">Other<br>
            Skills <br>
            <input type="checkbox" name="skills" value="Python">Python<br>
            <input type="checkbox" name="skills" value="React">React<br>
            <input type="checkbox" name="skills" value="Node/Express">Node/Express<br>
            Dept<br>
            <select name="dept">
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
            </select><br>
            <button type=submit>Click Here</button>
        </form>`)
    })

app.post("/details",(req,res)=>{
    res.send("Name: "+req.body.t1+"<br>Gender: "+req.body.gender+"<br>Skills: "+req.body.skills+"<br>Dept: "+req.body.dept)
})

app.listen(3005,()=>{
    console.log("runnig.........");
    
})