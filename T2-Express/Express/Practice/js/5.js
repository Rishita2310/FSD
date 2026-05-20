express=require('express')
app=express()
path=require('path')

app.use(express.static(path.join(__dirname,"../css")))
app.use(express.static(path.join(__dirname,"../image")))
app.use(express.static(path.join(__dirname,"../html"),{index:"5.html"}))
app.listen(3005,()=>{
    console.log("runinng.......... on http://localhost:3005");
})