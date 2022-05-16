// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down");
const form = document.getElementById("formBox");
const main = document.querySelector(".main");

hamburger.addEventListener("click", function () {
  form.classList.toggle("is-active");
  dropDown.classList.toggle("show");
  main.classList.toggle("is-margin");
});
