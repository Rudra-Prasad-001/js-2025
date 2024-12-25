//Two ways of declaring objects
//1. Object constructors (produces #singleton)


//2.Using object literals

let sym = Symbol('key1');

const person = {
    name: "Rudra",
    age: 21,
    gender: "Male",
    isGood: true,
    [sym] : "Ok", //Way to include symbol as a key 
    "sur name": 'Pati'

}

//Two ways of accessing objects in js

console.log(person.name) // op: Rudra
console.log(person.sym); //Can't be accessed using . this will return undefined (because there is no key(of type string) name as sym)
console.log(person["name"]); //op: Rudra //remember to put quotes

console.log(person["sur name"]); //op: Pati //This can't be accessed via .

console.log(person[sym]); //op: Ok //Symbols are only accessible using ObjectName.[SymbolName]

console.log(person);
person["age"] = 22;

person.greeting = function() {
    return `Merry Christmas dear ${this.name}`;
}
console.log(person.greeting());


Object.freeze(person); //It locks the person i.e further modification can't be done

person.age = 21; //Can't be assigned since object is freezed or locked

console.log(person);




