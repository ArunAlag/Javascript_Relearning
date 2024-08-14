// Definition : If...Else statements are conditional statements that allows the developers to run certain code based on certain criteria
/*
Challenge - Create a variable that contains an array, using an if statement with else if I want you to check the length of the array
- If it's empty, print out `empty`
- If it's less than 5 elements, print out "small"
- If it's less than 10 elements printout "medium"
     - Otherwise, print out "large"
*/

const array_1 = [1, 2, 3, 4];
const array_2 = [];
const array_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array_4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkLength(array) {
  if (array.length === 0) {
    console.log("empty");
  } else if (array.length < 5) {
    console.log("small");
  } else if (array.length < 10) {
    console.log("medium");
  } else {
    console.log("large");
  }
}

checkLength(array_1);
checkLength(array_2);
checkLength(array_3);
checkLength(array_4);

// Definition: ternary operators are pretty much a compact version of if..else statements
// structure : <condition_to_check> : <truth output> : <false output>

const isUserLoggedIn = true;

const welcome_message = isUserLoggedIn ? console.log("Welcome") : console.log("not logged In");

// Definition : switch statements are another form if...else statement but are much more readable, efficient with the only downside being it cannot do complex conditional statements (ex: range kind of conditions) unlike if...else
/* 
structure: switch(conditional_argument) { 
structure     case <condition> met : <code block> break;
structure     case <condition> met : <code block> break;
structure     case <condition> met : <code block> break;
structure     ....
structure     default <condition> : <code block> ; 
structure  } 

=> The case is equivalent to if & else..if and default is equivalent of else
! The `break` is needed because unlike the if...else if... else chain, if the break is not implemented it will continue to process other codes and have potential to output multiple results if conditions are met
*/

/* 
    Challenge : convert this if...else statement to switch 

    - if(favouriteAnimal === "cat") {
    -     console.log("cats are pretty cool")
    - } else if (favouriteAnimal === "dog") {
    -     console.log("they are kinda loud")
    - } else if (favouriteAnimal === "shark") {
    -     console.log("that is an interesting choice)
    - } else {
    -     console.log("That is cool but I am unfamiliar with that animal") 
    - }
*/

function switchStatement(animal) {
  switch (animal) {
    case "cat":
      console.log("cats are pretty cool");
      break;
    case "dog":
      console.log("they are kinda loud");
      break;
    case "shark":
      console.log("that is an interesting choice");
      break;
    default:
      console.log("That is cool but I am unfamiliar with that animal");
  }
}

switchStatement("cat");
switchStatement("dog");
switchStatement("shark");
switchStatement("others");

/*
    Challenge II - Create a switch that checks to see the value of the number of variable
    - If the number is 0 print out "it is zero"
    - If the number is 1 or 2 print out "it is small"
    - If the number is 3 or 4 print out "it is medium"
    - If the number is 5 print out "it is large"
    - If the number is none of these print out "try again"
*/

function printOutNumber(number) {
  switch (number) {
    case 0:
      console.log("It is zero");
      break;
    // => If there is more than 1 case to check, we can like the below then put the executable code then the break statement
    case 1:
    case 2:
      console.log("It is small");
      break;
    case 3:
    case 4:
      console.log("It is medium");
      break;
    case 5:
      console.log("It is large");
      break;
    default:
      console.log("Try again");
  }
}

printOutNumber(0);
printOutNumber(1);
printOutNumber(2);
printOutNumber(3);
printOutNumber(4);
printOutNumber(5);
printOutNumber(6);
