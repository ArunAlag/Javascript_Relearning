// definition : functions are essentially a block of code that can be repeatedly called

// structure: function <function_name> () { return }
//  => (), will take arguments [basically values passed into the function]
//  => {}, contains all the code logic
//  => return, is when the function returns a value, and it's optional as some function do not return any values and those functions are generally called as `void`

//  * To call the function, we do <function_name>(). The paranthesis is important to call the functions

function firstFunction() {
  console.log("hi");
}

firstFunction();

// Challenge : Create a function that takes no arguments & prints your name
// step 1: Define the function
function printMyName() {
  console.log("Arun Alagusunthram");
}

// step 2: Call the function
printMyName();

// subtopic: passing arguments
// => As I mentioned, arguments  are inside the "()", arguments of any data type can be passed to the function
// step 1: Define the function
function sum(a, b) {
  console.log(a + b);
}

// step 2: Call the function with the values, the values are called as `parameters` in this context
let x = 5;
let y = 6;
sum(x, y);

// Challenge: Create a function that takes one argument ( a person's name) and prints it out
// step 1: Define the function
function printPersonName(name) {
  console.log(name);
}

// step 2: Call the function with the parameters
printPersonName("Arun Alagusunthram Venkatachalam");

// ! Note that the function will still work even without passing a parameter but it will return as `undefined`

// subtopic: returning a value from function
// => We have been only doing the void functions, but functions are more meaningful & useful when they can return values
// => By returning the value, those functions value can be stored in a variable since function in JavaScript is High-Order-Functions meaning they are first class citizen
//  => High-Order-Functions can be stored as a result and passed as an argument into another function
// ! return is the last line in the function

function multiply(a, b) {
  return a * b;
}

let result = multiply(x, y);
console.log(result);

// Challenge : Create a function one argument (name) it will return that name added to the end of the string "Hello"
function greetings(name) {
  return "Hello " + name;
}

console.log(greetings("Arun Alag"));
