let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close')

burger.addEventListener('click', () => {
    menu.style.right = 0;
});

close.addEventListener('click', () => {
    menu.style.right = '-200px';
});