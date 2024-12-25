let date = new Date();

let newDate = new Date("2020-12-27");
// console.log(newDate.getYear()); //returns year(2020) - 1900 = 120 Deprecated shoud not be used

console.log(newDate.getFullYear());
console.log(newDate.toDateString());

console.table([typeof date, date.toString(), date.toDateString(), date.toLocaleDateString(),date.getDate(),date.getMonth()+1])


let time = Date.now(); //Returns a number in milisecond from midnight of Jan 1 1970


console.table([typeof time, time.toString(), time.toLocaleString(), time.valueOf()]);