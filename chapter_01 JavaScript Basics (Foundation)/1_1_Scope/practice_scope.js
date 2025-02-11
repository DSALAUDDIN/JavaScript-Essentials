/*
There are 4 types of scope
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope
 */

// Global Scope

/*
Variables declared outside of function or blocks , accessible from anywhere
 */

let name="I am Alauddin";

function greet(){
    console.log(name);
}
greet(); // variable is accessible in function
console.log(name); // variable is  accessible out of the function also globally


// Function Scope

/*
- variables declared in function and accessible within function only
 */

function exampleFucntionScope(){
    let example="I am example of Scope Function";
    console.log(example);
}
exampleFucntionScope(); // it is working

// console.log(example) // It will not working due to Function Scope

/*
Block Scope
 */

/*
Variables declared using let , const accessible only within block e.g if , for loops
 */
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar);  // "I am block-scoped"
}

// console.log(blockVar);  // Error: blockVar is not defined

/*
Lexical Scope
 */

/*
Functions can access variables from their enclosing scopes , even after the outer function has finished
 */
function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar);  // "I am outer"
  }
  inner();
}

outer();

// console.log(outerVar)

