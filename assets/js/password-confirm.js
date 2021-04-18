function check() {
  let password = document.querySelector(".password");
  let confirmpassword = document.querySelector(".confirmpassword");
  let border = document.querySelectorAll(".input-group");

  for (let i = 0; i < border.length; i++) {
    if (password.value != confirmpassword.value) {
      border[i].style = "border-bottom: 1px solid red;";
    } else {
      border[i].style = "border-bottom: 1px solid green;";
    }
  }
}
