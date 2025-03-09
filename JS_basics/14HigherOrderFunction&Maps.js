//Maps hold key value pairs but not duplicates(it is more safer and useful in many scenarios)

let countriesAndCapitals = new Map();

countriesAndCapitals.set("India", "New Delhi");

countriesAndCapitals.set("Pakistan", "Islamabad");

countriesAndCapitals.set("USA", "Washington DC");

countriesAndCapitals.set("China", "Bejing");

countriesAndCapitals.set("Thailand", "Bangkok");

console.log(countriesAndCapitals);

//Iterate Map using for of loop
const countries = [];
const capitals = [];
for (const [country , capital] of countriesAndCapitals) {
    countries.push(country);
    capitals.push(capital);
}

console.log(countries);
console.log(capitals);

//For of loops for array
const fruits = ["apple" , "orange" , "mango" , "cherry" , "banana", "jack fruit", "grapes",
"guava", "coconut", "kiwi" , "berry"
]

let fruitsStartingWithb = []
for (const fruit of fruits) {
    if(fruit[0] == 'b') {
        fruitsStartingWithb.push(fruit);
    } 
}

console.log(fruitsStartingWithb);

//For Each loop for array

fruits.forEach((item, index , array) => {
    console.log(`item at ${index} of ${array} is ${item}`)});

// We can't use for of loop for object (this will give error)

//Iterate object with for in loop(specially designed for object)

const users = [{name: "Rudra" , age: 21},
               {name: "Abinash" , age:21},
               {name: "Somyajeet", age:20}] 

//Remember users is a array
for (const index in users) {
    console.log(`${users[index].name} is ${users[index].age} years old`);
}






