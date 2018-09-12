const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const list = document.querySelector('.list');
const showcase = document.querySelector('.showcase');


hamburger.addEventListener('click', open);

function open() {
  console.log(123);
  nav.classList.toggle("nav--overlay");
  list.classList.toggle("list--overlay");
  hamburger.classList.toggle("hamburger--clicked");
}