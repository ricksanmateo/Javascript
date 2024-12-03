const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const dayOfMonth = date.getDate();
const year = date.getFullYear();

monthName.textContent = date.toLocaleString("default", { month: "long" });
dayName.textContent = date.toLocaleString("default", { weekday: "long" });
dayNum.textContent = dayOfMonth;
yearEl.textContent = year;
console.log(date);
