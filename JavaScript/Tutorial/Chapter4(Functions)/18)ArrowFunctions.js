// definition: It's basically a synthetic sugar for function
// structure : let <func_name> = (arg...) => { [The code] }

function sum(a, b) {
  return a + b;
}

let sum_arrow = (a, b) => {
  return a + b;
};

// => If there is only 1 arg, we can omit the brackets
// => If there is only 1 line of code block, we can omit the curly brackets and the  `return` keyword as well
let print_name = (name) => console.log(name);

// subtopic: Doing callback with arrow function
// step 1: define the callback(s)
let addition = (a, b) => a + b;
let minus = (a, b) => a - b;

// step 2: create a function that is going to call the callback(s)
let total = (a, b, callback) => callback(a, b);

// step 3: output the result
console.log(total(5, 10, addition));

// subtopic: Doing callback with arrow function and as an anonymous function
// step 1: create a function that is going to call the callback(s)
let anon_total = (a, b, callback) => callback(a, b);

// step 2: call the function that is going to call the callback(s)
anon_total(5, 6, (a, b) => {
  console.log(a * b);
});
