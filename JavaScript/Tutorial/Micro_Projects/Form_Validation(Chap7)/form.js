// Step 1: Elements to target
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password_confirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");

const popup = document.querySelector(".errors-list");

let errors = [];

form.addEventListener("submit", (e) => {
  reset();

  // * Validate form
  // => Ensure username is longer than 6 character
  if (username.value.length <= 6) {
    errors.push("Ensure username is longer than 6 character");
  }
  // => Ensure password is longer than 10 character
  if (password.value.length <= 10) {
    errors.push("Ensure password is longer than 10 character");
    // => Ensure password_confirmation is as same as the password field
  } else if (password.value !== password_confirmation.value) {
    errors.push("Password does not match");
  }

  // => Ensure user have agreed to the terms and condition
  if (Boolean(terms.checked) === false) {
    errors.push("Agree to the terms and condition");
  }

  if (errors.length > 0) {
    // => Prevent form from submitting
    e.preventDefault();
    displayErrors();
  }
  // => No errors? Then submit the form
});

function displayErrors() {
  errors.forEach((error) => {
    const li = document.createElement("li");
    li.textContent = error;

    popup.append(li);
    popup.closest(".errors").classList.add("show");
  });
}

function reset() {
  errors = [];
  popup.innerHTML = "";
  popup.closest(".errors").classList.remove("show");
}
