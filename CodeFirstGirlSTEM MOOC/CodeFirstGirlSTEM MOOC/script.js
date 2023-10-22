const body = document.querySelector("body"),
   sidebar = document.querySelector(".sidebar"),
   toggle = document.querySelector(".toggle"),
   searchBtn = document.querySelector(".serch-box"),
   modeSwitch = document.querySelector(".toggle-switch"),
   modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () =>{
body.classList.toggle("dark");
});