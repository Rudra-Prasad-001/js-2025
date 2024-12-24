//Primitive datatypes(call by value)
let num = 1;            
let myName = "Rudra"
let emailIsValid = true;
let gender;
let marks = null;  //when something is empty
let componet = Symbol(); //unique identification

//alert(3+3);  //We are in node not in browser so it gives error

console.table([typeof num,typeof myName,typeof emailIsValid,typeof gender ,typeof marks, typeof componet]); //typeof null => object



//Non primitive datatypes(call by reference)

// Array , Object , Function

let cricketers = ["Virat" , "MSD" , "Rahul" , "Jadeja"]; //returns object

let person = {
    pName : "Rudra",
    age : 21,
    role: "Student",
    isBest: true
}                  //returns object

let adder = function(a,b) {
    console.log(a+b);
}               //returns function object

console.table([typeof cricketers, typeof person , typeof adder]);
