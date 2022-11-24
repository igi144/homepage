let button__logo = document.querySelector(".button__logo");
let header = document.querySelector(".header")
button__logo.addEventListener("click", () => {

    header.remove();
});

let button = document.querySelector(".button__background");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {

    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "kolorowy";
    

});






















