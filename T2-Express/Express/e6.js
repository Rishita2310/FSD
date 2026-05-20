// write express js to define one json array of 3 objects having properties name and age of singer sort these 
// objects according to age if user req sorted name in url then all names along with age should be printed according to desc 
// order of age. display this sorted values in sort page and json obj on home page

var express=require ("express");
var app=express();

singers=[
        {name:"Arijit Singh",age:35},
        {name:"Ed Sheeran",age:30},
        {name:"Taylor Swift",age:32}
    ];

app.get("/home",(req,res)=>{
    res.json(singers);
});

app.get("/sort",(req,res)=>{
    let sortedSingers = singers.sort((a, b) => b.age - a.age);
    res.send(sortedSingers);     
});
app.listen(3100,()=>{
    console.log("Server is running on port 3100");
});