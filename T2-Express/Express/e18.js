// write express js to perform following task 
// 1. create one html file which contains two number type input field , one dropdown which contains options like select,
// add, sub, mul, div and one submit button
// 2. the input field must contains value greater than 0 as it will give a message "Please enter the valid number"
// also user must select any of the formula from the dropdown as give a message
//  "You Have not selected any formula(Message will be displayed on calc page)"
// 3. If one formula is selected and numbers sre entered then respective calculations will be prformed on calc page
// use get method to request the data

const express=require("express")
const app=express()
app. use(express.static(__dirname,{index:"3.html"}))             //true: querystring library, false: querystring module
app.get("/calc",( req, res )=>{
    const num1=parseInt(req.query.num1)
    const num2=parseInt(req.query.num2)
    const operation=req.query.operation
    if (num1<=0 || num2<=0){
        res.write("Please Enter Valid number")
    }else{
        if(operation=="select"){
            res.write("You Have not selected any formula")
        }else if(operation=="add"){
            res.write("Result: "+(num1+num2))
        }else if(operation=="sub"){
            res.write("Result: "+(num1-num2))
        }else if(operation=="mul"){
            res.write("Result: "+(num1*num2))
        }else if(operation=="div"){
            res.write("Result: "+(num1/num2))
        }
    }
    res.send()
    })
app.listen(3005,()=>{
    console.log("runnig.........");
})