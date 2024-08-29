// * Required imports
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from "date-fns";

// * DOM Elements
const date_button = document.querySelector(".date-picker-button");
const date_picker = document.querySelector(".date-picker");

init();

date_button.addEventListener("click", () => {
  date_picker.classList.toggle("show");
  loadCurrentMonth(date_button.textContent);
});

function init() {
  const timeStamp = Date.now();
  const date = new Date(timeStamp);
  const formattedDate = format(date, "MMMM d, yyyy");

  date_button.textContent = formattedDate;
}

function loadCurrentMonth(date) {
  const days = eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  const dayNumbers = days.map((day) => day.getDate());
  console.log(dayNumbers);
}
