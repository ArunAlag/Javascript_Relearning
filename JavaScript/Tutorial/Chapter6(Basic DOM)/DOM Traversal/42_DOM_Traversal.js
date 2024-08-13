/*
 definition : DOM Traversal is where we utilize the concept of parent-children relationship in between elements

 => DOM means Document Object Model and each element in DOM are objects that inherits common properties from .prototype(). 

=> For DOM traversal, we generally will use few of this methods listed below
    - .children => Returns HTML collection of elements within the target
        structure: <target_element>.children    
    - .nextElementSibling => Returns the element that comes after the target
        structure: <target_element>.nextElementSibling    
    - .previousElementSibling => Returns the element that comes before the target
        structure: <target_element>.previousElementSibling
    - .parent => Returns the element that that holds the target
        structure: <target_element>.parent
    - .closest() => Returns the element that comes before the target, generally upper side based on the querySelector
        structure: <target_element>.closest(<querySelector>)
*/

const grandParent = document.querySelector("#grand-parent");
let parents = grandParent.children;

grandParent.style.color = "red";
console.log(parents); // output: will give 2 divs as it's child because that's how it has been structured

parents = Array.from(grandParent.children); // Convert HTML Collection => Array

parents.forEach((parent) => {
  parent.style.color = "teal";
  parent.style.fontSize = "1.5rem";
});

/*
    Challenge - From parent 1, select parent 2 then change it's fontWeight to bold
*/

// * Parent 1 selected
const parent_1 = grandParent.children[0];

// * From Parent 1 going to Parent 2
const parent_2 = parent_1.nextElementSibling;
parent_2.style.fontWeight = "bold";

/*
    Challenge - From child 1, select parent then add 1px solid black border
*/

const child_1 = document.querySelector("#child_1");
const parent = child_1.parentElement;

parent.style.border = "3px solid black";

/*
    Challenge - From child 2, select child1 then add background color yellow
*/

const child_2 = document.querySelector("#child_2");
const sibling = child_2.previousElementSibling;

sibling.style.backgroundColor = "yellow";

/*
    Challenge - From either one of the child, select the grandparent and increase it's fontSize to 2rem and make it bold
*/

const theGrandPraent = child_1.closest("#grand-parent");
theGrandPraent.style.fontSize = "2rem";
theGrandPraent.style.fontWeight = "bold";
