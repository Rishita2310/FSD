// write a node js script to copy content of one file to another file.
// data should be fetched from source.txt and insert to destination.txt
// read data from destination file in the end.
// Asyn

var fs=require("fs")
fs.writeFile("source.txt","This is the source file content",function(err){
    if(err){ throw err;}
    else
    {
        fs.readFile("source.txt","UTF-8",function(err,data){
            if(err) {throw err;}
            else
            {
                fs.writeFile("destination.txt",data,function(err){
                    if(err) {throw err;}
                    else
                    {
                        fs.readFile("destination.txt","UTF-8",function(err,data){
                            if(err) {throw err;}
                            else
                            {
                                console.log("Data read from destination file: "+data);
                            }
                        });
                    }
                    
                });
            }
        });
    }
});
