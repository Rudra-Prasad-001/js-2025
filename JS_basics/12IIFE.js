//IIFE (Imediatly Invoked Function Expression)

//Sometimes we want our function should not to be polluted by the global variables so we use IIFE(primary reason)

//In IIFE the function executes immeadiatly (with the function definition)

(function add(a,b) { //Named IIFE
    console.log(a+b)
})(3,4);  // Note ; after IIFE is necessary otherwise you can't write the second IIFE

((a,b) => console.log(a*b))(2,3) //Unnamed or anonymous IIFE