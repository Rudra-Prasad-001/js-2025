//map() method apply the function to all the elements of an array and returns the final array(for Each method returns undefined)

const prices = [2,3,4,5,6,7];

let multiplyByTwo = prices.map(function mulByTwo(num) {
    return num*2;
});

console.log(multiplyByTwo);

console.log(prices);

//Note you have to explicitely use return statement to return something from a arrow function when you use {}
let dividedByThree = prices.map((num) =>{       return Number((num / 3).toFixed(1))
});

console.log(dividedByThree);


