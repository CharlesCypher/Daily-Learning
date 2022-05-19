// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down");
const form = document.getElementById("formBox");
const main = document.querySelector(".main");
const output = document.querySelector(".output");
const footer = document.querySelector(".footer");

hamburger.addEventListener("click", function () {
  // Scroll Position
  function getYPosition() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    return top;
  }
  if (getYPosition() == 0) {
    form.classList.toggle("is-active");
  } else {
    form.classList.remove("is-active");
  }
  dropDown.classList.toggle("show");
});

let titleInput = document.getElementById("title");
let noteTitle = document.querySelector(".note-title");
let textArea = document.getElementById("textArea");
let noteBody = document.querySelector(".note-body");
let submit = document.getElementById("submitBtn");

submit.addEventListener("click", () => {
  nt = titleInput.value;
  ta = textArea.value;
  localStorage.setItem("title", nt);
  // localStorage.setItem("title", nt);
  // localStorage.setItem("textArea", ta);

  const titleNote = localStorage.getItem("title");
  noteTitle.textContent = titleNote;
  // noteBody.textContent = ta;
  if (nt && ta) {
    for (let i = 0; i < localStorage.length; i++) {
      const title = localStorage.key(i);
      const nt = localStorage.getItem(title);
      // const textArea = localStorage.key(i);
      // const ta = localStorage.getItem(textArea);
      noteTitle.textContent += `${nt}`;
      noteBody.textContent += `${ta}`;
    }
  }
  noteBody.textContent += `${getYPosition()}`;
});

// if (nt || ta == "") {
//   output.classList.add("display-none");
// } else {
//   output.classList.add("display-block");
// }
