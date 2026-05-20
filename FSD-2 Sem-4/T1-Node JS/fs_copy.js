var fs=require("fs")
fs.writeFile("source.txt","This is the source file content",
    function(err)
    {
        if(err)
        {
            console.log("Error in writing file: "+err);
        }
        else
        {
            fs.copyFile("source.txt","destination.txt",
                function(err)
                {
                    if(err)
                    {
                        console.log("Error in copying file: "+err);
                    }
                    else
                    {
                        fs.readFile("destination.txt","UTF-8",
                            function(err,data)
                            {
                                if(err)
                                {
                                    console.log("Error in reading file: "+err);
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