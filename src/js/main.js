const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const list = document.querySelector('.list');
const showcase = document.querySelector('.showcase');
const header = document.querySelector('.header');


hamburger.addEventListener('click', open);

function open() {
  console.log(123);
  nav.classList.toggle("nav--overlay");
  list.classList.toggle("list--overlay");
  hamburger.classList.toggle("hamburger--clicked");
  header.classList.toggle("header--height");
}

window.sr = ScrollReveal();
    sr.reveal('.card__img', {
        reset: true,
        delay: 400,
        origin: 'bottom',
        distance: 0,
        duration: 500,
        scale: 0.5,
        easing: 'linear',
    });
    sr.reveal('.card__title, .card__text', {
        reset: true,
        delay: 400,
        origin: 'bottom',
        duration: 500,
        scale: 0.5,
        easing: 'linear',
    });
