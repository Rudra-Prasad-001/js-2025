// falsey values are false, 0 , -0 , "", null , undefined

//Except falsy values all other values are truthy
//Note [], {}, " ", "0","false" are truthy


//if else conditionals

let age = 18;

if(age > 18) {
    console.log("Welcome to the land of mess");
} else if (age === 18) {
   console.log("Hold on for a year!");
} else {
    console.log("Hey kid");
}

//The nullish coalescing operator (??) 

let notNullValue = null ?? 6; //Will assign 6

console.log(notNullValue);


notNullValue = undefined?? 9; //Will assign 9

console.log(notNullValue);

notNullValue = 0 ?? 1; //0

console.log(notNullValue);

notNullValue = false ?? 1; //false

console.log(notNullValue);

notNullValue = null ?? undefined; //undefined

console.log(notNullValue);

notNullValue = null ?? null;

console.log(notNullValue);

//Shorthand if-else or terniary operator (?)

// 

// (expression/condition) ? if exp  is true this block will execute : else this block will execute

(age < 20) ? console.log("I am the king") : console.log("Give me advice");

//Loops (Basic)

for (let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        //Lets skip 5's table
        if(i == 5) break;
        //let's skip times 3
        if(j == 3) continue;
        console.log(`${i} * ${j} = ${i*j}`);
    }   
    console.log("\n");
}

//While loop
let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}

//Do while loop

let flag = false;

do {
    console.log("I will print once even if the condition is false");
} while(flag);

