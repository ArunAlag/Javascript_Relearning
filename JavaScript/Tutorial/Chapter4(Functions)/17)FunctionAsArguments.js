// definition : Simply means functions can be passed as arguments to another function, as I mentioned in `16)NormalFunctions.js` file
// => By this, it means that the definition a.k.a blueprint of the function can be passed into another function and executed there
// => This passing function as an argument is called as "callback"

// - This printVariable() function prints whatever the argument is
function printVariable(variable) {
  console.log(variable);
}

function greetings(callback) {
  callback("Greet");
}

greetings(printVariable);
// => In the situation above, we are mapping the printVariable() function to the greeting() function which takes an argument that is the callback
// => Then we are just simply passing The "Greet" string to the callback since printVariable() is mapped to it

// subtopic: The function total takes 3 arguments in which 2 of those are values and one of those is the type of operation we are going to do on it

// step 1: define the callback(s)
// => The add(), minsu() functions are the callbacks we are going to work with
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

// step 2: create a function that is going to call the callback(s)
function total(a, b, callback) {
  return callback(a, b);
}

// step 3: output the result
let sum_result = total(10, 6, add);
let minus_result = total(11, 7, minus);

console.log(sum_result);
console.log(minus_result);

// Challenge : Create a new function that takes 2 parameters which are
// - 1. name, 2. callback that prints out what we pass to it
// - take the name and append "hello" to the beginning of the name
// step 1: define the callback(s)
function printName(name) {
  console.log("Hello", name);
}

// step 2: create a function that is going to call the callback(s)
function passTheName(name, callback) {
  callback(name);
}

// step 3: output the result
passTheName("Arun_Alag", printName);

// subtopic : Since the usage of callbacks is very common in JavaScript, we have a concept called as an "anonymous funciton" where instead of defining the callbacks outside of the function, we define it within the arguments

// definition: function(arg(s)..., function(parameter){})
// ! Anonymous function only be done during the calling of the function. It's passed as a parameter directly
// => anonymous function are called just like `function()` this

// Challenge: convert the previous challenge to anonymous function callback
// step 1: create a function that is going to call the callback(s)
function passTheName2(name, callback) {
  callback(name);
}

// step 2: call the function that is going to call the callback(s)
passTheName2("Arun Alag 3003", function (name) {
  console.log("Hello from anonymous: ", name);
});
