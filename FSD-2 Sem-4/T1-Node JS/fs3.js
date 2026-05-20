// write nodejs  script to write an array of object with properties 
// cricketers name and it's number in a file named cricketers.txt
// then read the file and display the object on console 

cricket=[
            {
            name:"Sachin Tendulkar",
            number:10
            },
            {
            name:"Virat Kohli",
            number:18  
            },
            {
            name:"MS Dhoni",
            number:7
            },
            {
            name:"Rohit Sharma",
            number:45
            }
        ]
var fs=require("fs")
fs.writeFileSync("cricketers.txt",JSON.stringify(cricket))
data=fs.readFileSync("cricketers.txt","UTF-8")
cricket=JSON.parse(data)
console.log(cricket)