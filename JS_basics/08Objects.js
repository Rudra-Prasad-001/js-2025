//Two ways of declaring objects
//1. Object constructors (produces #singleton)
let sym = Symbol('key2');
const singletonObj = new Object();

singletonObj.email = 'something@gmail.com';
singletonObj.phoneNumber = '9861081029';
singletonObj.name = 'Rudra';
singletonObj[sym] = 'yes';
singletonObj.greeting = function() {
    console.log(`Welcome dear user, ${this.name}`);
}

// console.log(singletonObj);

const anotherSingletonObj = new Object();

anotherSingletonObj.email = 'kuchbhi@gmail.com';
anotherSingletonObj.phoneNumber = '9861906899';
anotherSingletonObj.name = 'Legend';
anotherSingletonObj[sym] = 'no';
anotherSingletonObj.birthDate = (new Date("2003-02-22")).toDateString();

//Merge two objects (there are two methods)

//Method1

let objArb = Object.assign({},singletonObj,anotherSingletonObj); //This will override the keys of first object which are same in second object

// console.log(objArb);

//Method 2

let objSpread = {...singletonObj, ...anotherSingletonObj};

console.log(objSpread);

console.log(objSpread.hasOwnProperty('email'));

console.log(Object.keys(objSpread)); //op: array of keys
console.log(Object.values(objSpread)); // op: array of values

//2.Using object literals

sym = Symbol('key1');

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

//Object de-structuring

let brandInfo = {
    brandName : 'Tata',
    brandReputation : 'High',
    isIndian : true,
    brandValuation : 999999999999
}

const {brandName: bName} = brandInfo;

console.log(bName) //No need to use . or []

const {brandReputation: Rep, brandValuation: value} = brandInfo;

console.table([Rep , value]);
