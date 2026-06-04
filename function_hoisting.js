greet("helo");

function greet(noice) {
    console.log(noice);
}

//this is function hoisting, jabhaskript automatically puts the function call after function execution...

console.log(variabol);

let variabol = 23;
//will wrk too, this is variable hoisting. but the log will print undefined, as the declararation of variable is done first, but the value will be assigned after that
//in function, full function will move above, but in var, only variable declaration will be move upper....