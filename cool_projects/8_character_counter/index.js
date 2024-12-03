const textEreaEl = document.querySelector(".textarea");
const totalCounterEl = document.querySelector(".total-counter");
const ramainingCounterEl = document.querySelector(".ramaining-counter");

textEreaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterEl.innerText = textEreaEl.value.length;
  ramainingCounterEl.innerText =
    textEreaEl.getAttribute("maxlength") - textEreaEl.value.length;
}
