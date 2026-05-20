// Write a NodeJS program to create a file named test.txt containing the 
// initial text "Exam attempt ". Then, it should add three more lines to 
// the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".
// After writing, the program must read the file and count how many 
// times the word "Pass" appears and if the word "Pass" appears three or 
// more times, the program should erase the content inside test.txt

const fs = require('fs');
fs.writeFileSync('text.txt', 'Exam attempt\n');
fs.appendFileSync("text.txt", "Entry 1: Pass \n");
fs.appendFileSync("text.txt", "Entry 2: Fail \n");
fs.appendFileSync("text.txt", "Entry 3: Pass \n");
fs.appendFileSync("text.txt", "Entry 4: Pass \n");
fs.appendFileSync("text.txt", "Entry 5: Fail \n");
fs.appendFileSync("text.txt", "Entry 6: Pass \n");
data=fs.readFileSync("text.txt","utf-8");
part=data.split(" ");
let count=0
console.log(part);
for(let i=0;i<part.length;i++){
    if(part[i]=="Pass"){
        console.log(count)
        count++;
    }
}
console.log(count);
if(count>=3){
    fs.writeFileSync("text.txt","");
}