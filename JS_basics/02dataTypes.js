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


//Stack and Heap memory in js

let myNum1 = 35;
let myNum2 = myNum1; 

myNum2 = 25; //myNum1 will remain 35 but myNum2 changes to 25 (Primitive data use stack)

console.table([myNum1,myNum2]); 

let obj1 = {
    name : "Legend",
    age : 21,
    isBest: false
}

let obj2 = obj1; //Both refers to same memory location(reference)

obj2.name = "Rudra"; //This will also change obj1 name since it refers to same memory location(it uses heap)

console.table([obj1 , obj2]);



