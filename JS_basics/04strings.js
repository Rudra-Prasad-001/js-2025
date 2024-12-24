let str = "Legend"
let modifiedStr = str.includes("end")
console.log(modifiedStr);

modifiedStr = str.at(0);

console.log(modifiedStr);

modifiedStr = str.charCodeAt(0);
console.log(modifiedStr);

str = new String("Rudra");

console.log(str)

modifiedStr = str.toString()  //It returns the string value of string wrapper object 
//It is same as str.valueOf()

console.log(modifiedStr)

str = "  Raj  "

modifiedStr = str.trim()

console.log(modifiedStr);
