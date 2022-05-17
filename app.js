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
  nt = titleInput.value;
  localStorage.setItem("title", nt);

  const titleNote = localStorage.getItem("title");
  noteTitle.textContent = titleNote;
  noteBody.textContent = textArea.value;
});

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "_storage_test_";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  console.log("Yippee! We can use localStorage awesomeness");
} else {
  console.log("Too bad, no localStorage for us");
}
