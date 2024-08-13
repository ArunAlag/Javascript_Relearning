// definition: Think of data attributes like metadata for the specific elements that is intended to be used by JavaScript but not for the user to see

/*
    subtopic: CRUD Operation with data attribute

    => Create
    - add the data attribute to the html element
    structure: data-<name>=<value>

    => Read
    - call it in JS using the .dataset
    structure: <element>.dataset
    structure to access specific property: <element>.dataset.<key>

    => Update 
    structure to update existing property: <element>.dataset.<key> = <new_value>
*/

// Sample : Create (I)
const buttons = document.querySelectorAll("[data-counter]");

// Sample : Read (I)
buttons.forEach((button) => {
  // - Whole object values
  console.log(button.dataset); // {counter: <value>, id:<value>}

  // - Individual property
  console.log(`ID: ${button.dataset.id}`);
  console.log(`count: ${button.dataset.counter}`);
});

// Sample : Create (II)
const first_btn = document.querySelector("[data-id='A']");

// Sample : Update (I)
first_btn.dataset.counter = 5;

// Sample : Read (II)
console.log(first_btn.dataset);

// Challenge - Update the button's value based on the number of clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.clicks++;
    button.innerHTML = button.dataset.clicks;
  });
});
