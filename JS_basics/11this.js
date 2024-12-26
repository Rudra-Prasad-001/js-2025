console.log(this); //returns Blank object in Node but window object in browser



//This depends upon the context of the object
let obj = {              
    name: "Rudra",
    sayHello: function () {
        return `Hola, ${this.name}`; //Returns Hola, Rudra
    },

    //Arrow functions do not have their this context , but inherit from it's lexical enclosure
    sayMyName: () => {
        return `Your name is: ${this.name}`;
    }
}

console.log(obj.sayHello()); 
console.log(obj.sayMyName()); //Returns Your name is: undefined

function sayItBold(obj) {
    console.log(this.name); //will give undefined
}

sayItBold(obj); //Returns undefined