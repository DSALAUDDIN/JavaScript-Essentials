/*
Primitive data types are immutable (their values cannot be changed directly)
and are assigned by value. JavaScript has 7 primitive data types:
 */

/*
(1) String
 */
// Represent text
let name = 'Aauddin';
let greeting ="Welcome to the js world!";

console.table([name,greeting])
console.log(typeof (greeting))

/*
Number
 */
// represent both integers and floating-point numbers
let age = 30;
let pi = 3.14;

console.table([age,pi])

/*
Boolean
 */
// Represent True or False

let isAdult =true;
let isStudent = false;
console.log(isAdult,isStudent);

/*
undefined
 */

// A variable declared but not assigned a value

let a;
console.table([a]);

/*
Null
 */
// represents the absence of a value

let person= null;
console.log(person);

/*
Symbol
 */
// Represent unoique and immutable value
let sym= Symbol("Description is good");
console.log(sym)

/*
Bigint
 */
// Represent very large number

let bigNumber= 12345678923423423423423423423423423423442342;
console.log(bigNumber);
console.log(typeof(bigNumber));