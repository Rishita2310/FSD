// write nodeJS that performs following operations using path module and async file system module
// 1. from given file existing file path extract dir name using path module
// 2. create extracted dir inside an existing folder using fs module
// 3. extract file name from given path using path module
// 4. create that file inside newly created dir and write some data into it.
// 5. copy content of this file to another file.
// 6. delete original file after copying content.

var pm = require("path");
var fs = require("fs");
oldpath = "LJ/sample.txt";
dir = pm.dirname(oldpath);
filename = pm.basename(oldpath);
newpath = dir + "/" + filename;
console.log(newpath);
// fs.mkdir(dir, function (e) {
//   if (e) {
//     console.log(e);
//   } else {
//     console.log("Directory Created..");
//   }
// });
fs.writeFile(newpath, "Sample Data", (e) => {
  if (e) throw e;
  console.log("File written");
  fs.copyFile(newpath, "LJ/copied_sample.txt", function (e) {
    if (e) throw e;
    console.log("File copied");
  });
});
