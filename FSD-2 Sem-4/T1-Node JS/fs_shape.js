// create JSON object which contains array of objects 
// calculate perimeter of sqaure and circle by using side and diameter value respectively 
// write object as well as perimeter value in shape.txt file 

shape=[
    {
        "name":"square",
        "side":8
    },
    {
        "name":"circle",
        "diameter":10
    }
]
var fs=require("fs")
fs.writeFileSync("shape.txt",JSON.stringify(shape))
data=fs.readFileSync("shape.txt","UTF-8")
shape=JSON.parse(data)
for(i=0;i<shape.length;i++){
    if(shape[i].name=="square"){
        shape[i].perimeter=4*shape[i].side
    }
    else if(shape[i].name=="circle"){
        shape[i].perimeter=3.14*shape[i].diameter
    }
}
fs.writeFileSync("shape.txt",JSON.stringify(shape))
data=fs.readFileSync("shape.txt","UTF-8")
shape=JSON.parse(data)
console.log(shape)  