//array 
const arr = [10, 20, 30, "Hello", "blah", true];

//accessing array with arr.0 is not valid because dot notation requires valid identifiers, and identifiers can't start with a digit

//arr[2] and arr['2'] will give the same result because JavaScript internally converts array indices to strings
//this is because arrays in JS are objects, and object keys are always strings under the hood

console.log(arr['02']); //undefined — '02' is a different string from '2', no implicit numeric conversion here

console.log(arr.length); //a JS array's length property and numerical indices are connected
//increasing length will add empty slots (holes), not undefined values
arr.length = 10;
console.log(arr);
console.log(Object.keys(arr));    //only shows indices of actual elements, not the empty slots
console.log(Object.entries(arr)); //same — skips holes
console.log(arr[6]); //undefined — reading a hole gives undefined

//reducing length will truncate and permanently delete elements beyond the new length
arr.length = 4;
console.log(arr);

arr[9] = "kuch bbi"; //creates a sparse array — indices 4–8 are holes

arr.forEach((item, index) => {
    console.log(`${index} : ${item}`); //forEach skips holes in sparse arrays
});

//push and pop (end of array)
arr.push("fool"); //adds to end, mutates original, returns new length
console.log(arr);
arr.pop(); //removes from end, mutates original, returns the removed element
console.log(arr);

//shift and unshift (start of array)
arr.shift(); //removes first element, shifts everything left, returns removed element
console.log(arr);
arr.unshift("follow", 2); //adds "follow" & 2 at start, shifts everything right
console.log(arr);

//splice — mutates the original array
arr.splice(2, 3, "halo", "dream"); //removes 3 elements at index 2, inserts "halo", "dream" in their place
console.log(arr);
const removedarr = arr.splice(1, 2, "boice"); //removed/replaced elements are returned as a new array
console.log(removedarr);
console.log(arr);

//slice — non-mutating, returns a shallow copy
arr.push(2, 3);
const arr2 = arr.slice(); //copies entire array without mutating original

//can we do: const arr2 = arr.slice().push(4, 5); ?
//NO — push returns the new length (a number), not the array, so arr2 would be 13 (or whatever length)
arr2.push(4, 5);
console.log(arr);  //original unchanged
console.log(arr2); //new array with 4, 5 appended

const arr3 = arr2.slice(2, 3); //slice(start, end) — end is exclusive, so only index 2 is returned
console.log(arr3);

//why not just do arr2 = arr ?
//because that's a reference copy — both variables point to the same object in memory
//mutating one would mutate the other

//slice() is a shallow copy — nested objects/arrays inside are still shared by reference
//for a true deep copy (fully independent clone):
const deepCopy = structuredClone(arr2);
deepCopy.pop();
console.log(arr2);    //unchanged
console.log(deepCopy); //independent copy with last element removed


//MAP — transforms each element, returns a new array, does not mutate original

let a1 = [10, 20, 21, 30, 41, 40, 51, 50];

let ansmp = a1.map((num) => {
    return num * 2;
});
console.log(ansmp);

ansmp.map((num, idx, here) => {
    console.log(num);
    console.log(idx);   //index of current element
    console.log(here);  //third param is the array itself (the one being mapped)
    //fourth param — undefined, map callback only receives (element, index, array)
});


//FILTER — returns a new array with elements that pass the condition, does not mutate original

let ansft = a1.filter((number) => {
    return number % 2 === 0; //keep only even numbers
});
console.log(ansft);

let ansft2 = arr2.filter((value) => {
    return typeof(value) === 'string'; //keep only strings
});
console.log(ansft2);


//REDUCE — reduces array to a single value by accumulating results

let ansrd = a1.reduce((acc, curr) => {
    return acc + curr; //acc holds running total, curr is current element
}, 0); //0 is the initial value of acc

console.log(ansrd);

//SORT — mutates original array, sorts as strings by default (lexicographic)
//so [10,20,21,30,41,40,51,50] sorts as ["10","20","21","30","40","41","50","51"]
//for numeric sort: a1.sort((a, b) => a - b)
a1.sort();
console.log(a1);
console.log(a1.indexOf(50)); //returns index of 50, -1 if not found


//forEach — executes a function for each element, returns undefined (not chainable like map)
a1.forEach((value, idx) => {
    console.log(idx, ":", value);
});


//OBJECT

let obj = {
    "full name": "Prajwal", //key with space must be in quotes, accessed as obj["full name"]
    age: 23,
    weight: 54,
    greet: () => {          //method stored as a value inside the object
        console.log("Hewloooooo");
    }
};

//for...in loops over enumerable keys of an object (or array indices if used on arrays)
for (let keys in obj) {
    console.log(keys, ": ", obj[keys]); //bracket notation needed for dynamic key access
}