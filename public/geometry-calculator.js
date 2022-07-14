var radius = document.getElementById("number_radius");
var width = document.getElementById("number_width_rec");
var height = document.getElementById("number_height_rec");
var base = document.getElementById("number_base_tri");
var height_tri = document.getElementById("number_height_tri");
var side = document.getElementById("number_side");
var ans = document.getElementById("ans");
var submit_circle = document.getElementById("submit_circle");
var submit_rec = document.getElementById("submit_rec");
var submit_tri = document.getElementById("submit_tri");
var clear_value = document.getElementById("clear_value");

submit_circle.addEventListener("click", () => {
    let r = parseInt(radius.value);
    let area = Math.PI * r * r;
    ans.innerHTML = "Area: " + area;
});

submit_rec.addEventListener("click", () => {
    let w = parseInt(width.value);
    let h = parseInt(height.value);
    let area = w * h;
    ans.innerHTML = "Area: " + area;
});

submit_tri.addEventListener("click", () => {
    let b = parseInt(base.value);
    let h = parseInt(height_tri.value);
    let area = Math.floor(1 ,2) * b * h;
    ans.innerHTML = "Area: " + area;
});

submit_sq.addEventListener("click", () => {
    let s = parseInt(side.value);
    let area = Math.pow(s, 2);
    ans.innerHTML = "Area: " + area;
});

clear_value.addEventListener("click", () => {
    radius.value = "";
    width.value = "";
    height.value = "";
    base.value = "";
    height.value = "";
    side.value = "";
    ans.innerHTML = "";
});
