let pi = Math.PI;
let number = new Number(12300456.789);

console.table([number.toFixed(2), number.toLocaleString('en-IN'), number.toPrecision(6), number.toPrecision(9)]);

console.table([pi, Math.ceil(number), Math.floor(number), Math.round(number), Math.max(1,2,3,-1,0), Math.min(1,3,4,0,-5,-6) ])

//To produce number(randomly) between range min & max

let min = 15;

let max = 20;

//formula

for(let i = 0 ; i < 10 ; i++) {

    console.log(Math.floor(Math.random() * (max-min+1) + min)); //This is the formula to produce random numbers between min & max

}