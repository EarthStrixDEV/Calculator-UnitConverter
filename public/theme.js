var p = document.querySelectorAll("p");
var h1 = document.querySelectorAll("h1");
var legend = document.querySelectorAll("legend");
var label = document.querySelectorAll("label");
var b = document.querySelectorAll("b");
var body = document.querySelector("body");
var white_theme_button = document.querySelector("#white_theme");
var dark_theme_button = document.querySelector("#dark_theme");

white_theme_button.addEventListener("click", () => {
    p.forEach(function (element) {
        element.style.color = "black";
    });
    h1.forEach(function (element) {
        element.style.color = "black";
    });
    legend.forEach(function (element) {
        element.style.color = "black";
    });
    label.forEach(function (element) {
        element.style.color = "black";
    });
    b.forEach(function (element) {
        element.style.color = "black";
    });
    body.style.backgroundColor = "white";
    body.style.color = "black";
    white_theme_button.style.display = "none";
    dark_theme_button.style.display = "inline-block";
})

dark_theme_button.addEventListener("click", () => {
    p.forEach(function (element) {
        element.style.color = "white";
    });
    h1.forEach(function (element) {
        element.style.color = "white";
    });
    legend.forEach(function (element) {
        element.style.color = "white";
    });
    label.forEach(function (element) {
        element.style.color = "white";
    });
    b.forEach(function (element) {
        element.style.color = "white";
    });
    body.style.backgroundColor = "black";
    body.style.color = "white";
    white_theme_button.style.display = "inline-block";
    dark_theme_button.style.display = "none";
})