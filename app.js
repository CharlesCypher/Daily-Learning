// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down");
const form = document.getElementById("formBox");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

hamburger.addEventListener("click", function () {
  form.classList.toggle("is-active");
  dropDown.classList.toggle("show");
  footer.classList.toggle("is-margin");
});

let title = document.getElementById("titleBox");
let note = document.querySelector(".notes");
let submit = document.getElementById("submitBtn");
submit.addEventListener("click", (e) => {
  e.preventDefault;
  note.textContent = title;
  console.log("clicked");
});
