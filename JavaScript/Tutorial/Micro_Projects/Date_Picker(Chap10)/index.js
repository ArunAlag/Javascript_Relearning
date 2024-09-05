// * Required imports
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  getDay,
  subDays,
  addDays,
  isEqual,
  startOfDay,
} from "date-fns";

// * DOM Elements
const date_button = document.querySelector(".date-picker-button");
const date_picker = document.querySelector(".date-picker");
const prev_month_button = document.querySelector(".prev-month-button");
const next_month_button = document.querySelector(".next-month-button");
const date_picker_current_month = document.querySelector(".current-month");
const date_picker_grid_dates = document.querySelector(".date-picker-grid-dates");

// * Global Storage
let dateObj = {};

init();

// * Trigger Events
date_button.addEventListener("click", () => {
  // => Remove old elements before adding the new one
  resetUI();
  date_picker.classList.toggle("show");
  if (dateObj.selectedDateString) {
    date_button.dataset.date = dateObj.selectedDateString.toISOString();
  }

  updateMonth(0);
});

prev_month_button.addEventListener("click", () => {
  resetUI();
  updateMonth(-1);
});

next_month_button.addEventListener("click", () => {
  resetUI();
  updateMonth(1);
});

function init() {
  const timeStamp = Date.now();
  const dateString = new Date(timeStamp);

  date_button.dataset.date = dateString.toISOString();
  date_button.textContent = format(dateString, "MMMM d, yyyy");
  date_picker_current_month.textContent = format(dateString, "MMMM - yyyy");
}

function loadMonth(dateString) {
  const calendarDays = generateDatesRange(dateString);

  const days = eachDayOfInterval({
    start: calendarDays.start_range,
    end: calendarDays.end_range,
  });

  // => Get the current month based on the date
  const currentMonth = dateString.getMonth();
  const previousSelectedDate = dateObj.selectedDateString;

  // => Convert the days into dates
  days.forEach((day) => {
    const button = createDateButton(day, currentMonth);

    date_picker_grid_dates.append(button);
  });
}

function generateDatesRange(dateString) {
  // => Get the start day of the month
  const startDate = startOfMonth(dateString);

  // => Get the end day of the month
  const endDate = endOfMonth(dateString);

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

function resetUI() {
  // => Clear generated dates
  date_picker_grid_dates.innerHTML = "";
}

function updateMonth(offset) {
  // => Get the index based on the offset
  const currentDateString = new Date(date_button.dataset.date);
  const index = currentDateString.getMonth() + offset;
  const newDateString = new Date(currentDateString.setMonth(index));

  // => Update the dataset
  date_button.dataset.date = newDateString.toISOString();

  // Update the button and header
  date_picker_current_month.textContent = format(currentDateString, "MMMM - yyyy");

  loadMonth(newDateString);
}

function selectedDate(element) {
  const previousSelect = date_picker_grid_dates.querySelector(".selected");

  // => If there is existing selected date, remove it
  if (previousSelect) {
    previousSelect.classList.remove("selected");
  }

  // => Highlight the newly added date
  element.classList.add("selected");

  // => Save it in global date object
  dateObj.selectedDateString = new Date(element.dataset.date);
  date_button.dataset.date = dateObj.selectedDateString.toISOString();
  date_button.textContent = format(dateObj.selectedDateString, "MMMM d, yyyy");
}

// * Helper function
function createDateButton(day, currentMonth) {
  const dayMonth = day.getMonth();

  const button = document.createElement("button");
  button.textContent = day.getDate();
  button.classList.add("date");

  // => Ensure past / present month's dates are disabled
  if (dayMonth !== currentMonth) {
    button.classList.add("date-picker-other-month-date");
  } else {
    // => Add the date as metadata
    button.dataset.date = day;
    button.addEventListener("click", (e) => {
      selectedDate(button);
    });

    if (isDateSelected(day)) {
      selectedDate(button);
    }
  }

  return button;
}

function isDateSelected(day) {
  // => Remove the time aspect and just compare the dates
  return isEqual(startOfDay(day), startOfDay(dateObj.selectedDateString));
}
