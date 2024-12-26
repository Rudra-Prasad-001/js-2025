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

//The nullish coalecesing operator (??) 

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

