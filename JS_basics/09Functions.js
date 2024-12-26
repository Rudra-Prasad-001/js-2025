// function add(a,b) {
//     console.log(a+b); //Returns undefined
// }

// console.log(add(1,2));

// //Using restOperator (wraps multiple values into an array)

// function pricesInTheCart (...prices) {
//     return prices;
// }

// console.log(pricesInTheCart(100,320,400,800,20,60,78,1,98,50));

// let result = (a,b) => {   //Anonymous function
//     return a*b;
// }

// console.log(result(3,2));

//Working with objects

const user = {
    username: "Legend7377",
    email: "something@gmail.com",
    age: 21,
    isLoggedIn: true
}

function greetUser(obj) {
    if(obj.isLoggedIn === true) {
      return `User ${obj.username} is just arrived!`
    }
}

console.log(greetUser(user));

//Working with array

function printSecond(array) {
    return console.log(`second: ${array[1]}`);
}

let res = printSecond([1,0,3,4]);
console.log(res); //Will print undefined(bcz console.log() returns undefined)
