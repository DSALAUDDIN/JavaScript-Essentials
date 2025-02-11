// Scope im JavaScript
// refers to the visibility and accessibility

/*
Types of Scope in JS
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope

 */

/*
Global Scope:
- variable is declared outside any function or block it has global scope.
means can be accessible from anywhere
 */

let globalVariable = "I am global";

function greet(){
    console.log(globalVariable);
}
greet(); // access global variable inside a fucntion
console.log(globalVariable)  // accessible globally

/*
Function Scope
- variable declared inside a function available only within that function.
- accessible only in function
 */

function exampleFunctionScpe(){
    let localVariable= "I am local"
    console.log(localVariable)
}
exampleFunctionScpe();

/*
Block Scope:
- varaible declared using let and const
- meaning they are available within the block
 */

if(true){
    let blockVar= " I am block-scoped";
    console.log(blockVar);
}
let blockVar = " I am out of the box block"
console.log(blockVar) // Error: blockVar is not defined

/*
Lexical Scope:
- means that the scope of a variable is determined by where it is declared in the source code .
- A function can access variables from its outer function (enclosin scope ) , even if the outer function has already
    finished executing
 */

function outer(){
    let outerVar = "I am outer function";
    function inner(){
        console.log(outerVar);
    }
    inner();
}

outer();