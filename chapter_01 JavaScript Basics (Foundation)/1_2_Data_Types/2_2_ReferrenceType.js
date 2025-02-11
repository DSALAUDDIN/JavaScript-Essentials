/*
Object:
An object is a collection of key-value pairs,
where keys are strings (or symbol) and values can be any data type (including other objects)
 */
// A collection of key-value pairs

let person={
    name: "Alcie",
    age: 25,
    isStudent: false

}
console.log([person.name, person.age, person.isStudent])
console.log(person)

/*
Arrays:
are ordered lists of values (elements) ,
and each element can be of any data type
 */

// An ordered collection of elements
let numbers=[10,20,30,40];
let names=["alice", "bob", "charlie"];

console.log(numbers);
console.log(names);


/*
Functions
in JS Functions are also object , and they can be assigned to variables,
passed as arguments or returned from other functions
 */
// - A block of code that can be executed

function greet(){
    console.log("Hello");
}
greet()