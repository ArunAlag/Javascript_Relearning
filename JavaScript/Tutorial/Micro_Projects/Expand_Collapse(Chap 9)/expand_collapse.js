document.addEventListener("click", (e) => {
  const target = e.target;

  if (!target.matches(".expand-button")) return;

  toggleContent(target);
});

function toggleContent(button) {
  const card = button.closest(".card");
  const card_body = card.querySelector(".card-body");
  const isExpanded = card_body.classList.toggle("show");

  button.textContent = isExpanded ? "Collapse" : "Expand";
}
