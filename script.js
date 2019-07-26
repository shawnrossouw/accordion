const accordion = document.querySelector(".accordion-top-panel"),
  sub = document.querySelector(".accordion-bottom-panel");

accordion.addEventListener("click", () => {
  sub.classList.toggle("show-panel");
});
