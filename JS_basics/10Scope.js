function test() {
    let a = 1;     //Scope of a is in this function
    const b = 2;   //Scope of b is in this function
    var c = 3;     //Scope of c is functional but not block level (hence should be avoided)
}

// console.log(a); //Will give error
// console.log(b); //Will give error
// console.log(c); //Will give error

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); //Will give error
// console.log(b); //Will give error
// console.log(c);    //op: 30 (does not obey block level scope hence should not be used)

function newfun() {
    let outer = 10;
    function actualFun() {
        let inner = 20;
        console.log(outer); //child function can access it's accenstors variables
    }

    actualFun();

    // console.log(inner); //Will give error (bcz inner scope is only inside actualFun)
}

// console.log(outer); //Will give error

newfun();


