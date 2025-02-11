# JavaScript Overview 

## what is JS?
- A high-level, dynamic programming language for adding interactivity to websites.
- Runs in browser (client-side) and on servers (with Node.js)

## Execution Context
- Global Execution Context: Default context, where the code starts. Global variables are accessible everywhere.
- Function Execution Context: Created when a function is called. Variables within the function are only accessible there.
- Eval Execution Context : Created by eval() (rarely used).

## Event Loop
 - Single Threaded Execution Model
 - Handle synchronous and asynchronous code
 - call stack: Executes synchronous code 
 - Message Queue : Holds asynchronous tasks (like setTimeout, API request)
 - Event Loop moves tasks from the message queue to the call stack when its empty .
