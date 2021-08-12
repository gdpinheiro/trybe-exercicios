// Create Local Storage Elements
localStorage.setItem("bgColor", "snow");
localStorage.setItem("txtColor", "black");
localStorage.setItem("fntSize", "medium");
localStorage.setItem("lnHeight", "normal");
localStorage.setItem("fntFamily", "sans-serif");

// Add Event Listener
document.getElementById("bgColor").addEventListener("change", changeBgColor);

document.getElementById("txtColor").addEventListener("change", changeTxtColor);

document.getElementById("fntSize").addEventListener("change", changeFntSize);

document.getElementById("lnHeight").addEventListener("change", changeLnHeight);

document
  .getElementById("fntFamily")
  .addEventListener("change", changeFntFamily);

// Functions

let cssChanges = document.querySelector(".cssChanges");

function changeBgColor(params) {
  cssChanges.style.backgroundColor = document.getElementById("bgColor").value;
}
function changeTxtColor(params) {
  cssChanges.style.color = document.getElementById("txtColor").value;
}
function changeFntSize(params) {
  cssChanges.style.fontSize = document.getElementById("fntSize").value;
}
function changeLnHeight(params) {
  cssChanges.style.lineHeight = document.getElementById("lnHeight").value;
}
function changeFntFamily(params) {
  cssChanges.style.fontFamily = document.getElementById("fntFamily").value;
}
