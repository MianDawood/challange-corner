let icon1 = document.querySelector('.icon-1');
let icon2 = document.querySelector('.icon-2');
let icon3 = document.querySelector('.icon-3');
let icon4 = document.querySelector('.icon-4');

icon1.addEventListener('click', function () {
    let p = document.querySelector('.p-0');
    p.classList.toggle('active');
})
icon2.addEventListener('click', function () {
    let p = document.querySelector('.p-1');
    p.classList.toggle('active');
})
icon3.addEventListener('click', function () {
    let p = document.querySelector('.p-2');
    p.classList.toggle('active');
})
icon4.addEventListener('click', function () {
    let p = document.querySelector('.p-3');
    p.classList.toggle('active');
})