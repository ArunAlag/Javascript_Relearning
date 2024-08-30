// * Required imports
import { format, eachDayOfInterval, startOfMonth, endOfMonth, getDay, subDays, addDays } from "date-fns";

// * DOM Elements
const date_button = document.querySelector(".date-picker-button");
const date_picker = document.querySelector(".date-picker");
const date_picker_grid = document.querySelector(".date-picker-grid");

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

function loadCurrentMonth(dateText) {
  const date = new Date(dateText);
  const calendarDays = generateDatesRange(date);

  const days = eachDayOfInterval({
    start: calendarDays.start_range,
    end: calendarDays.end_range,
  });

  // => Convert the days into dates
  const currentMonth = date.getMonth();

  days.forEach((day) => {
    const dayMonth = day.getMonth();
    const button = document.createElement("button");
    button.textContent = day.getDate();
    button.classList.add("date");

    if (dayMonth !== currentMonth) {
      button.classList.add("date-picker-other-month-date");
    }

    date_picker_grid.append(button);
  });
}

function generateDatesRange(date) {
  // => Get the start day of the month
  const startDate = startOfMonth(date);

  // => Get the end day of the month
  const endDate = endOfMonth(date);

  // => Get the first day alignment
  const firstDayAlignment = getDay(startDate);

  // => Calculate how many days must be added before the actual date
  const previousMonthDates = subDays(startDate, firstDayAlignment);

  // => Get the last day alignment
  const lastDayAlignment = getDay(endDate);

  // => Calculate how many days must be added after the end date of the month
  const days_to_add = 6 - lastDayAlignment;
  const nextMonthDates = addDays(endDate, days_to_add);

  return { start_range: previousMonthDates, end_range: nextMonthDates };
}
