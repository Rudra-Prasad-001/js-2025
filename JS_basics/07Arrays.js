const arr1 = [1,2,3,4];

const arr2 = new Array("Ram", "Shyam", "Dam", "Hari")
//Array built-in copy method like Array.from(), Array.slice() creates shallow copy(i.e refers to the same same memory location) 


// To create deepcopy use Json.parse(Json.stringify(arrayName));



console.log(arr2.slice(1,2));
console.log(arr2);
console.log(arr2.splice(2,2)); //This method permanently changes the array(arr2) i.e permanently removes the spliced part
console.log(arr2);
console.log(arr2.join('-'));
arr2.push("Vishnu");
arr2.push("anything");
arr2.pop()
console.log(arr2);
arr2.unshift(1);
console.log(arr2);
arr2.shift();
console.log(arr2);

let arr3 = arr1.concat(arr2);
console.log(arr3);

const rivers = ['Ganga' , 'Yamuna' , 'Saraswati' , 'kaveri', 'Godavari'];

const oceans = ['Indian', 'Pacific', 'Atlantic' , 'Arctic', 'Antractic'];

const seas = ['Arabian' , 'Bay of Bengol', 'Lakhswadeep', 'Sri Lankan'];
//Concatenation of arrays using spread operator(it spreads the elements i.e contains within this)
const allWaterBodies = [...rivers, ...seas, ...oceans];

console.log(allWaterBodies);

let num = Array.of(1,2,3); //similar to Array.form()

console.log(num);

console.log(num.find(elem => elem > 1));

console.log(num.findIndex(elem => elem > 1));

console.log(num.indexOf(9));

console.log(num.indexOf(3));










