// Step 1: Elements to target
const open_modal = document.querySelector("#open-modal-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const close_modal = document.querySelector("#close-modal-btn");

// Step 2: Trigger the target
open_modal.addEventListener("click", () => {
  toggleDisplay();
});

close_modal.addEventListener("click", () => {
  toggleDisplay();
});

overlay.addEventListener("click", () => {
  toggleDisplay();
});

function toggleDisplay() {
  overlay.classList.toggle("open");
  modal.classList.toggle("open");
}
