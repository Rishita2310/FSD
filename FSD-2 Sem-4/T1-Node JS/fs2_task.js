// write data to file , appending data to file and then read data from file using callback

var fs=require("fs")
fs.writeFile("text.txt","Hello World",
    function(err){
        if(err)
        {
            console.log("Error "+err)}
        else
        {
            fs.appendFile("text.txt"," Welcome to NodeJS",
                function(err)
                {
                    if(err)
                    {
                        console.log("Error "+err)
                    }
                    else
                    {
                        fs.readFile("text.txt","UTF-8",
                            function(err,data)
                            {
                                if(err)
                                {
                                    console.log("Error "+err)
                                }                             
                                else
                                {     
                                    console.log(data)
                                }
                            }
                        );  
                    }
                }
            );
        }   
    }   
);
console.log("Program Ended");