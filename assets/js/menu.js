var menu = document.getElementById('menu');
var body = document.querySelector('section');
var lowerbar = document.querySelector('.lower-bar');
menu.addEventListener('click', function () {
    menu.classList.toggle('active');
    lowerbar.classList.toggle('lower-bar-active');
    body.classList.toggle("blocked");
})