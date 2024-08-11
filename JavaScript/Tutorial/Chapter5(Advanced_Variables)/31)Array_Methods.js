const generic_array = [1, 2, 3, 4, 5];

// subtopic : Most common array methods that we will encounter is as below

// definition: array.forEach(), it's a method which executes a provided function for every element in the array once
// structure: array.forEach( callback(elem,*index,*array) )
// => forEach method PROVIDES 3 parameter value for the callback
//  => The current element, the element's index & which array it's currently executing
// ! The only required parameter though it's the current element it's being excuted on
// ! It DOES NOT RETURN ANYTHING but just executes it

/*
 * This is what the internal workings of .forEach() might look like 
 
 - If all the arguements are required
 function callback(elem,index, arr_name) {
    console.log(elem)
    console.log(index)
    console.log(arr_name)
}

function forEach(elem, index,arr_name, callback) {
    return callback(elem,index, arr_name)
}

*/

// sample
generic_array.forEach((elem) => {
  console.log(elem);
});

// definition: array.map(), executes a provided function for every element in the array once and return another array with updated value
// structure: array.map( callback(elem,*index,*array) {return <new_value> } )
// => like .forEach(), .map() also provides the same parameters
// ! The only required parameter is the current element
// ! It returns a new array and DOES NOT update the EXISTING ARRAY

// sample
let squared_generic_array = generic_array.map((element) => {
  return element * 2;
});
console.log(squared_generic_array);

// definition: array.filter(), executes a provided function for every element in the array once and return another array with the value that satisfied the condition. Basically, like a `if` statement but the array version
// structure: array.filter( callback(elem) { return <[true]> } )
// => like .forEach() & .map(), .filter() also provides the same parameters
// ! The only required parameter is the current element
// ! It returns a new array and DOES NOT update the EXISTING ARRAY

// sample
let filtered_generic_array = generic_array.filter((element) => {
  return element < 3;
});

console.log(filtered_generic_array);

// definition: array.find(), executes a provided function for every element in the array once and returns ONLY THE FIRST value that satisfied the condition.
// structure: array.find( callback(elem) { return <[true]> } )
// ! The only required parameter is the current element
// ! It returns only one value NOT AN ARRAY

// sample
let highest_number = generic_array.find((element) => {
  return element >= 4;
});

console.log(highest_number);

// definition: array.some(), executes a provided function for every element in the array once and returns true if any one of the element satisfy the condition and false if none is met.
// structure: array.some( callback(elem) { return <[true | false]> } )
// ! The only required parameter is the current element
// ! It returns only one value & a BOOLEAN VALUE

// sample
let boolean = generic_array.some((element) => {
  return element % 2 === 0;
});

console.log(boolean);

// definition: array.every(), as same as array.some() with the difference being, it will only return true if ALL the elements satisfy the condition otherwise it will return only false.
// structure: array.some( callback(elem) { return <[true | false]> } )
// ! The only required parameter is the current element
// ! It returns only one value & a BOOLEAN VALUE

let every_boolean = generic_array.every((element) => {
  return element % 2 === 0;
});

console.log(every_boolean);

// definition: array.reduce() is a method that executes the provided function for every element in the array and returns an accumulated result as a single value
// structure: array.reduce(callback(accumalator, currentElem){return <new_acc value>}, initialValue)
// => It requires a callback function and an initializer
// => It provides 4 parameters to the callback but only 2 is required as mentioned in the `structure`.
// ! The required parameter for the callback is accumalator & currentElement
// ! The second required parameter for .reduce() is the initialValue
// ! It returns only one value

// sample
const sum = generic_array.reduce((previousElement, currentElement) => {
  return previousElement + currentElement;
}, 0);

/*
  subtopic: Explanation
  - The sample wants the sum value of the generic array, the sum means the total which means the initializer must be 0 so that we can add properly
  - For the first round, the initializer works as the previousElement
  - We then update the intializer with new value which is the current sum of previousElement and currentElement
  - This process repeats until the last element in the array is obtained and finnaly returned
*/

/* 
  Challenge: provided below is the sample items object
  - const items = [{price:10}, {price:20}, {price:14},{price:1},{price:6}]

  * Find the total price for all the items
*/

const items = [{ price: 10 }, { price: 20 }, { price: 14 }, { price: 1 }, { price: 6 }];

const total_items_price = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(total_items_price);

// definition: array.includes() executes a provided value for every element in the array once and will return a boolean value. true will be returned if the element is found
// structure: array.includes(<element_to_be_found>)
// ! It does not require a callback function

// sample
console.log(generic_array.includes(3));
