function add(a,b) {
    console.log(a+b); //Returns undefined
}

console.log(add(1,2));

//Using restOperator (wraps multiple values into an array)

function pricesInTheCart (...prices) {
    return prices;
}

console.log(pricesInTheCart(100,320,400,800,20,60,78,1,98,50));

let result = (a,b) => {   //Anonymous function
    return a*b;
}

console.log(result(3,2));




