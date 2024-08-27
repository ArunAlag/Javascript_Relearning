// * Elements to target
const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");

// * Retrive data from localStorage
let todos = [];
const fetchTodos = localStorage.getItem("todolist");
if (fetchTodos) {
  todos = JSON.parse(fetchTodos);
  renderUI(todos);
}

// * Trigger the target
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") return;
  addTodo(input.value);

  input.value = "";
});

// * For Dynamically created elements
list.addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches("[data-button-delete")) {
    deleteTodo(target);
  }

  if (target.matches("[data-list-item-checkbox]")) {
    updateTodos(target);
  }
});

function renderUI(todos) {
  // Clean the list before adding again
  list.innerHTML = "";
  todos.forEach((todo) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector(".list-item");
    const span = clone.querySelector("[data-list-item-text]");
    const checkbox = clone.querySelector("[data-list-item-checkbox");

    li.dataset["todo_id"] = todo.id;
    span.textContent = todo.todo;
    checkbox.checked = todo.complete;
    list.append(clone);
  });
}

function addTodo(todo) {
  // => Add the todo in localStorage
  const todo_obj = { id: generateID(), todo: todo, complete: false };
  todos.push(todo_obj);

  localStorage.setItem("todolist", JSON.stringify(todos));
  // => Display the todo
  renderUI(todos);
}

function updateTodos(element) {
  const li = element.closest(".list-item");
  const target_id = li.dataset.todo_id;

  // => Find the todo in the array and update the todo.complete status
  const todo = todos.find((todo) => todo.id === target_id);
  todo.complete = element.checked;

  // => Update the data in localStorage
  localStorage.setItem("todolist", JSON.stringify(todos));
}

function deleteTodo(element) {
  const li = element.closest(".list-item");
  const target_id = li.dataset.todo_id;

  // => Remove the item from localStorage
  todos = todos.filter((todo) => todo.id !== target_id);
  localStorage.setItem("todolist", JSON.stringify(todos));

  // => Refresh the UI with updated todolist
  renderUI(todos);
}

// ~ Helper function
function generateID() {
  const timeStamp = Date.now(); // => Generates to milliseconds precision
  const random_number = Math.floor(Math.random() * 9000) + 1000;
  return `${timeStamp}_${random_number}`;
}
