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

// console.log(dividedByThree);


let nums = [5,10,15,20,25,30,33];

const multipleOfTen = nums.filter((num) => num % 10 === 0);

console.log(multipleOfTen);

//chaining of functions 

const addThreeCheckMulThree =nums
                                .map((num) => num +3)
                                .filter((num) => num % 3 === 0);

console.log(addThreeCheckMulThree);


// reduce() method

const myShoppingCart = [
    {item: "Thedhe Medhe",
     price: 20
    },

    {item : "Coke",
     price: 40
    },
    {item: "Ice cream",
     price: 60
    },
    {item: "Hide & Seek",
     price: 100
    }
]

let myTotal = myShoppingCart.reduce((acc, curval) =>acc + curval.price,0); 

console.log(myTotal);

