// write async node js script to write a text "you are creating a file" to help.txt
// after that append the text you are appending data to same help.txt 
// "you are appending data"
// after that read the file and print content on console
// after finishing read operation copy the content of help.txt file to help2.txt
//after finishing copy aperation print the lines "Thanks for using this program on console"

var fs=require('fs');
fs.writeFile("help.txt","you are creating a file\nx",
    function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("File created successfully");
            fs.appendFile("help.txt","you are appending data",
                function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Data appended successfully");
                        fs.readFile("help.txt","utf-8",
                            function(err,data){
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    console.log("File read successfully");
                                    console.log(data);
                                    fs.copyFile("help.txt","help2.txt",
                                        function(err){
                                            if(err){
                                                console.log(err);
                                            }
                                            else{
                                                console.log("File copied successfully");
                                                console.log("Thanks for using this program");
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);