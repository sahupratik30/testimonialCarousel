const wrapper = document.querySelector(".wrapper");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const cards = [...document.querySelectorAll(".testimonial__card")];

let currentCard = 1;
prevBtn.setAttribute("disabled", "disabled");
nextBtn.addEventListener("click", () => {
  prevBtn.removeAttribute("disabled");
  wrapper.style.marginLeft = `-${100 * currentCard}%`;
  currentCard = currentCard + 1;
  if (currentCard === cards.length) {
    nextBtn.setAttribute("disabled", "disabled");
  }
});
prevBtn.addEventListener("click", () => {
  nextBtn.removeAttribute("disabled");
  wrapper.style.marginLeft = `-${100 * (currentCard - 2)}%`;
  currentCard = currentCard - 1;
  if (currentCard == 1) {
    prevBtn.setAttribute("disabled", "disabled");
  }
});
