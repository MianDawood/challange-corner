var sidePan = document.querySelector(".side-panel");
var rightSidePan = document.querySelector(".right-side-panel");
var goback = document.querySelector(".go-back");
var users = document.querySelector(".users");
var user = document.querySelectorAll(".user");
var width = window.screen.width;

user.forEach(ele => {
    ele.addEventListener("click", function () {
        if(width < 990) {
            sidePan.style.display = "none";
            rightSidePan.classList.remove('blocked');
        }
    })    
});
goback.addEventListener("click", function () {
    sidePan.style.display = "";
    rightSidePan.classList.add('blocked');
})
