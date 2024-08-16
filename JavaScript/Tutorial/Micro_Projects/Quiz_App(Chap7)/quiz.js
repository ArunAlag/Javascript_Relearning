// Step 1: Elements to target
const alert_box = document.querySelector("#alert");
const quiz_form = document.querySelector("#quiz-form");
const question_item = document.querySelectorAll(".question-item");

// Step 2: Trigger the target
quiz_form.addEventListener("submit", (e) => {
  // Prevent the form from refreshing
  e.preventDefault();
  reset();
  const answers = [];

  question_item.forEach((question) => {
    const selections = question.querySelectorAll(".answer");

    for (const selection of selections) {
      if (selection.checked) {
        answers.push(selection);
      }
    }
  });

  validateAnswer(answers);
});

function validateAnswer(answers) {
  const correct_answers = answers.filter((answer) => answer.value === "true");

  correct_answers.forEach((answer) => {
    answer.closest(".question-item").classList.remove("incorrect");
    answer.closest(".question-item").classList.add("correct");
  });

  if (question_item.length === correct_answers.length) {
    popup();
  }
}

function reset() {
  question_item.forEach((question) => {
    question.classList.remove("correct");
    question.classList.add("incorrect");
  });
}

function popup() {
  alert_box.classList.add("active");

  setTimeout(() => {
    alert_box.classList.remove("active");
  }, 1000);
}
