// definition : It's a variable that can hold multiple values identifed by indexes

// subtopic: CRUD operations with Array

// => Creation
// structure: let <var_name> = [value,value,value,...]
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// => Read
//structure = <array_name>[index_position] => first element is always index 0
// * Access the 2nd element in the array
console.log(a[1]);

// => Update
// structure: <array_name>.push(<value>) => will add at the end of the array
a.push(13);

//  => It can also hold multiple data type in the same array including another array and it's called as nested array
a.push([5, 9, 0]);
console.log(a);

// => To read a single element inside of nested array the structure looks like below
// structure: <array_name>[index_position][inner_array_index_position]
console.log(a[11][1]); // We are accessing the 11 element in the `array a`, the 11th element is an array by itself and we are accessing the that element's 2nd element which will output 9

// Challenge I : Create an array with the first 5 letters of the alphabet and then print out the middle element in the array (C)
const alphabet = ["a", "b", "c", "d", "e"];

console.log(alphabet[2]);

/*
 Challenge II : Given an array below
 - const numbers = [[1,2,3,4,5], [6,7,8,9,10],[11,12,13,14,15]]

 * print out 4,8,11
*/

const numbers = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(numbers[0][3]);
console.log(numbers[1][2]);
console.log(numbers[2][0]);

// subtopic : To get the length of an array, we can use array.length()
console.log(a.length);
