
// JAVASCRIPT OBJECTS - NOTES & PRACTICE

// 1. CREATING AN OBJECT

let obj = {
    "full name": "Prajwal",  // key with space → must use quotes
    age: 23,
    weight: 54,
    greet: () => {           // method inside object
        console.log("Hewloooooo");
    }
};


// 2. ACCESSING PROPERTIES

console.log(obj);                 // entire object
console.log(obj["full name"]);    // bracket notation → use when key has spaces/special chars
console.log(obj.age);             // dot notation → use for normal keys

// console.log(obj[age]);      // ERROR: 'age' is treated as a variable, not a string key
// console.log(obj["age"]);    // this works fine


// 3. CALLING A METHOD

obj.greet(); // methods are just functions stored as values


// 4. UPDATING A PROPERTY

obj.age = 43;
console.log(obj.age); // 43


// 5. typeof OBJECT

console.log(typeof obj); // "object"
// NOTE: typeof null is also "object" — this is a known JS quirk/bug


// 6. SHALLOW COPY (REFERENCE COPY) 

let obj2 = obj;       // obj2 is NOT a new object, it just points to the same object in heap
obj2.age = 10;

console.log(obj.age);  // 10 — original also changed!
console.log(obj2.age); // 10

// Stack: obj and obj2 are different variables (different references)
// Heap: but both point to the SAME object in memory → changing one changes both
// This is called a SHALLOW COPY (or reference copy)


// 7. DEEP COPY (INDEPENDENT COPY)

let obj3 = { ...obj };   // spread operator creates a new object
obj3.age = 99;

console.log(obj.age);  // 10 — original NOT changed
console.log(obj3.age); // 99

// { ...obj } is a shallow clone — works fine for flat objects
//  For nested objects, use: JSON.parse(JSON.stringify(obj)) or structuredClone(obj)


// 8. ADDING & DELETING PROPERTIES

obj.city = "Bengaluru";   // add new property dynamically
delete obj.weight;         // remove a property
console.log(obj);


// 9. LOOPING OVER AN OBJECT

for (let key in obj) {
    console.log(key, "→", obj[key]);
}


// 10. USEFUL OBJECT METHODS

console.log(Object.keys(obj));    // ["full name", "age", "greet", "city"]
console.log(Object.values(obj));  // [values array]
console.log(Object.entries(obj)); // [["full name", "Prajwal"], ["age", 10], ...]


// PRACTICE 

// 1. Create a 'car' object with brand, model, year, and a method 'start' that logs "Vroom!"
// 2. Make a copy using spread and change the year — check if original changes
// 3. Loop over the car object and print each key-value pair
// 4. Add a new property 'color' and delete 'year', then log the object