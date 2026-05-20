// write a nodeJS that performs the following operations using path module and async file system module.
// 1.from the given file existing file path extract the dir name using path module
// 2. create the extracted directory inside an existing folder using fs module
// 3. extract the file name from the given path using path module.
// 4. create that file inside the newly created directory and write some data into it.
// 5. copy the content of this file to another file.
// 6. delete the original file after copying the content
// oldpath="LJ/sample.txt"

var pm=require("path")
var fs=require("fs")
oldpath="LJ/sample.txt";
dirname=pm.dirname(oldpath)
console.log(dirname)
filename=pm.basename(oldpath)
console.log(filename)
// fs.mkdir(dirname,function(err) {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return;
//     }
//     console.log('Directory created successfully');
// });
newfilepath=dirname+"/"+filename
console.log(newfilepath);
fs.writeFile(newfilepath,"This is the content of the file",
    function(err)
    {
        if(err){
            console.error('Error writing file:', err);
        } else {
            console.log('File written successfully');
            fs.copyFile(newfilepath,"LJ/copied_sample.txt",
                function(err)
                {
                    if(err){
                        console.error('Error copying file:', err);
                    } else {
                        console.log('File copied successfully');
                        fs.unlink(newfilepath,
                            function(err)
                            {
                                if(err){
                                    console.error('Error deleting file:', err);
                                } 
                                else 
                                {
                                    console.log('Original file deleted successfully');
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);