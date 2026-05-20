// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white 
// space in .txt file.
// 2.append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.Find maximum number from that and append with message 
// “maximum number=” in same file.

const fs = require("fs");
fs.writeFile 