var fs=require("fs")
fs.writeFile("text.txt","Hello World",
    function(err){
        if(err){
            console.log("Error "+err)
        }
        else{
            console.log("File created successfully")
        }
        console.log("Write Operation")
    }
);
console.log("Program Ended")