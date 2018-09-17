const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const list = document.querySelector('.list');
const showcase = document.querySelector('.showcase');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu')

const allLinks = document.querySelectorAll('.link');

function loopThroughLinks() {
    allLinks.forEach(function(link) {
    link.classList.remove('list__link--active')
    })
  }
  
allLinks.forEach(function(link) {
    link.addEventListener('click', function() {
    loopThroughLinks();
    link.classList.toggle('list__link--active')     
    })
})


hamburger.addEventListener('click', open);

function open() {
  nav.classList.toggle("nav--overlay");
  list.classList.toggle("list--overlay");
  hamburger.classList.toggle("hamburger--clicked");
  header.classList.toggle("header--height");
  menu.classList.toggle('menu--height');
}




 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

