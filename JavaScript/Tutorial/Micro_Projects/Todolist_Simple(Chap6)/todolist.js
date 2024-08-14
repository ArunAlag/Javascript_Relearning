// Step 1: Elements to target
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// Step 2: Trigger the target
form.addEventListener("submit", (e) => {
  // Prevents the website from refreshing
  e.preventDefault();

  displayItem(input.value);

  // step: clear input
  input.value = "";
});

function displayItem(addedItem) {
  const div = document.createElement("div");
  div.textContent = addedItem;
  div.classList.add("list-item");

  // step: Delete Items
  function removeItem() {
    div.removeEventListener("click", removeItem);
    div.remove();
  }
  div.addEventListener("click", removeItem);

  // step: Display the item
  list.appendChild(div);
}
