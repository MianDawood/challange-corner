var page1 = document.querySelector(".page-1");
var page2 = document.querySelector(".page-2");
var page3 = document.querySelector(".page-3");

var buttons1 = document.querySelector(".btn-1");
var buttons2 = document.querySelector(".btn-2");
var buttons3 = document.querySelector(".btn-3");


buttons1.addEventListener("click", function () {
    buttons1.classList.toggle("active");
    buttons2.classList.remove("active");
    buttons3.classList.remove("active");

    page1.classList.remove("blocked");
    page2.classList.add("blocked");
    page3.classList.add("blocked");
})
buttons2.addEventListener("click", function () {
    buttons1.classList.remove("active");
    buttons2.classList.add("active");
    buttons3.classList.remove("active");

    page1.classList.add("blocked");
    page2.classList.remove("blocked");
    page3.classList.add("blocked");
})
buttons3.addEventListener("click", function () {
    buttons1.classList.remove("active");
    buttons2.classList.remove("active");
    buttons3.classList.add("active");

    page1.classList.add("blocked");
    page2.classList.add("blocked");
    page3.classList.remove("blocked");
})
