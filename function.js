console.log("Yo yo yo");

function full(first, second)
{
    let full = first + " " + second;
    return full;
    //unreachable from here
    console.log("!Will not be executed");
}

let ans = full(34, 23);
console.log(ans);

//one more trick to do functions:
 let addi = function(num1 , num2) {
    return num1+num2;
 }

//But more famous one is arrow function:
let add = (num1, num2) => {
    return num1+num2;
}

console.log(add(10,20));


//default parameters
let saymyname = (fname = "I don't know") => {
    console.log("Hello", fname);
}

saymyname(); //will print default value
saymyname(undefined); //still default value will be execute

let upthefirst = (fname = "White", lname = fname.toUpperCase()) => {
    console.log("hellow", fname, " ", lname);
    
}

upthefirst("Walter");//Walter WALTER
