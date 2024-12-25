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

let myName = "Rudra Prasad Pati"

let myNameArray = myName.split(' ',2); //Separator and limiter(by default limiter covers total string)

console.log(myNameArray);

console.table([myName.lastIndexOf('ra'), myName.indexOf('ra'), myName.slice(0,5), myName, myName.replace('ra','RA'), myName , myName.replaceAll(/[A-Z]/g , 'r'), myName]); //Note always use g(global) flag when use replaceAll or matchAll method
 
