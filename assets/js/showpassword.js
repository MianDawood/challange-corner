var toggle = document.querySelector(".show-password-toggle");
var input = document.querySelectorAll("input[type=password]");
var circle = document.querySelector(".circle");
toggle.addEventListener("click", function () {
  circle.classList.toggle("active");
  for (let i = 0; i < input.length; i++) {
    if (input[i].type === "password") {
      input[i].type = "text";
    } else {
      input[i].type = "password";
    }
  }
});
