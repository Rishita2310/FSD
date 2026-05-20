// Write a function 'ArrayToObject' which takes in an array of arrays,
// and returns an object with each pair of elements in the array as a key
// value pair and store the result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]
// Output= { Country  : ' India ', State  : ' Gujarat ',  City  :
// ‘Ahmedabad’ }

Input = [
  ["Country", "India"],
  ["State", "Gujarat"],
  ["City", "Ahmedabad"],
];

const fs = require("fs");

// data = fs.readFileSync("arraytoobject.txt", "utf-8");
// console.log(data);
var output = {};
for (i in Input) {
  output[Input[i][0]] = Input[i][1];
}
fs.writeFileSync("arraytoobject.txt", JSON.stringify(output));
console.log(output);
