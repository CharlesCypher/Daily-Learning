// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down");
const form = document.getElementById("formBox");
const main = document.querySelector(".main");
const textArea = document.getElementById("textArea");
const footer = document.querySelector(".footer");

hamburger.addEventListener("click", function () {
  form.classList.toggle("is-active");
  dropDown.classList.toggle("show");
  footer.classList.toggle("is-margin");
});

let titleInput = document.getElementById("title");
let noteTitle = document.querySelector(".note-title");
let noteBody = document.querySelector(".note-body");
let submit = document.getElementById("submitBtn");
submit.addEventListener("click", (e) => {
  e.preventDefault;
  noteTitle.textContent = titleInput.value;
  noteBody.textContent = textArea.value;
});
