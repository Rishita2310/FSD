express=require("express")
app=express()
// path=require("path")
// staticpath=path.join(__dirname,"../Frontend")
// app.use(express.static(staticpath,{index:"3.html"}))
app.use(express.static("../Frontend",{index:"3.html"}))
app.listen(3005,()=>{
    console.log("runinng..........");
})