// let num = 8;

// let string = String(num);

// console.log(typeof string)

let str = "33a"

let valueInNumber = Number(str);

console.log(typeof valueInNumber);

console.log(valueInNumber);

//Other dataTypes to number

/* "123" => 123
   "123abc" => NaN (typeof Number)
   null => 0
*/

let emptyQuote = ""

let quote = "Rudra"

let bool = Boolean(emptyQuote);

console.log(bool);

bool = Boolean(quote);

console.log(bool);

let isNull = null
console.log(Number(isNull));
// console.table([Boolean(isNull), String(isNull), Null(isNull), Symbol(isNull)]); //gives error

console.table([Boolean(undefined), Boolean(0), Boolean(1), Boolean(NaN), Boolean(40) , Boolean(null), Boolean()]);

