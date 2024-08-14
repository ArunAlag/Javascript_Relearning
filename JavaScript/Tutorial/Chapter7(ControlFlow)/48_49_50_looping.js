// definition: Looping is done when we want to repeatedly call a certain code. Like for instance the array.forEach() is a form of looping where the element goes through each elements repeatedly and evaluate the code

// definition: One of the fundamental loops is called as For Loop or in other words, controlled loop
/* 
    => For a loop to be succesufully ran without any issues, there is 3 aspects to it which are
        - The loop must have an iterator
        - A conditional statement in respect iterator must be there to stop the loop when the condition is met
        - An counter to make sure the iterator is approaching towards the conditional statement
*/

// structure: for(<iterator>, condition to stop in respect to the iterator, iterator counter) { <code block> execution }
// Sample
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// => In this case, the iterator (i) is initialized to the value 0 and the loop will stop once i's value is less than (max 9), for the i to increase towards the goal, the counter for the iterator being added 1 each time the loop completes (i++)

// Challenge : loop an array of alphabet [a,b,c] without using forEach()

const array = ["a", "b", "c"];

// Step 1: initilize an iterator, `let i = 0`
// Step 2: condition to stop in respect to the iterator, i < array.length [this will stop the looping once the end of the array is reached]
// Step 3: increment the iterator, `i++`
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("!---------------!");
/* 
  Challenge 2: Create a for loop that loops from 0 to 10 and prints out all values from 0 to 10

  Challenge 3: Modify this loop and exit the loop when the value is equal to 5 by using break

  Challenge 4: Modify the loop in Challenge 2 to skip even numbers and by using continue
*/
// => The `break` keyword means, it will stop anything its doing
// => The  `continue` keyword means, it will skip only the current one but will run the next one

// Challenge 2
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("!---------------!");
// Challenge 3
for (let i = 0; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
console.log("!---------------!");
// Challenge 4
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
console.log("!---------------!");
// definition: The next fundamental type of loop is called as while loop. It does all the things that the For Loop do but in a different way while retaining all the principles that is required for a successful loop
/*
  structure: let iterator = <initial_value>
  structure: while(<condition to stop in respect to the iterator>){
  structure   codeblock...
  structure   <iterator counter>
  structure: }
*/
// => Even while loop can use the `break` and `continue` but it's not often used with the while loop compare to the for loop
// This is how a looping of until 10 is done using While Loop
let iterator = 0;
while (iterator <= 10) {
  console.log(`Using While Loop: ${iterator}`);
  iterator++;
}
console.log("!---------------!");
// => While Loop is best used when we don't know how many loops we are going to make. See the object below and print out each of the name in the object
const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
};
console.log("!---------------!");
// step 1: initialize the iterator
let currentPerson = person;

// step 2: condition to stop in respect to the iterator
while (currentPerson != null) {
  console.log(currentPerson.name);

  // step 3: iterator counter
  currentPerson = currentPerson.friend;
}
console.log("!---------------!");
// definition: Last bit of fundamental loop is called as recursion but it's less often used, it takes advantage of nested function calling
// structure: function <name> () {
// structure:   if(condition to stop in respect to the iterator) return;
// structure:     <code_block>
// structure:   function <same_function_name> ()
// structure: }

// => Printout number 1 to 10 using recursion

function recursion(iterator) {
  if (iterator === 10) return;

  console.log(`Recursion Count: ${iterator}`);
  iterator++;

  recursion(iterator);
}

recursion(0);

// Challenge : Calculate the sum of number 1 to 10 using recursion
function recursive_sum(number) {
  if (number === 11) return 0;

  return number + recursive_sum(number + 1);
}

console.log(recursive_sum(0));
console.log("!---------------!");
// Challenge : print the name of the person object using recursion

function recursive_person_obj(current_person) {
  if (current_person == null) return;

  console.log(`Recursive Called, ${current_person.name}`);

  current_person = current_person.friend;
  recursive_person_obj(current_person);
}

recursive_person_obj(person);
