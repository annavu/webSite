const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const list = document.querySelector('.list');
const showcase = document.querySelector('.showcase');
const header = document.querySelector('.header');
const items = document.querySelectorAll('.list__item');
const itemActive = document.querySelector('.list__item--active');
const links = document.querySelectorAll('.list__link');

// function loopThrough() {
//   items.forEach(function(item) {
//     item.classList.remove('list__item--active')
//   })
// }


// items.forEach(function(item) {
//   item.addEventListener('click', function() {
//     console.log(item.children[0])

//     itemActive.classList.remove('list__item--active')
//     loopThrough()
//     item.classList.toggle('list__item--active')
//     item.children[0].classList.remove('list__link')
//     item.children[0].classList.toggle('list__link--active')
//   })
// })


hamburger.addEventListener('click', open);

function open() {
  console.log(123);
  nav.classList.toggle("nav--overlay");
  list.classList.toggle("list--overlay");
  hamburger.classList.toggle("hamburger--clicked");
  header.classList.toggle("header--height");
}




 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});





// let anchorlinks = document.querySelectorAll('a[href^="#"]')
//     console.log(anchorlinks)
 
//  for (let item of anchorlinks) { // relitere 
//      item.addEventListener('click', (e)=> {
//          console.log(123)
//          let hashval = item.getAttribute('href')
//          let target = document.querySelector(hashval)
//          target.scrollIntoView({
//              behavior: 'smooth',
//              block: 'start'
//          })
//          history.pushState(null, null, hashval)
//          e.preventDefault()
//      })
//  }

// window.sr = ScrollReveal();
//     sr.reveal('.card__img', {
//         reset: true,
//         delay: 400,
//         origin: 'bottom',
//         distance: 0,
//         duration: 500,
//         scale: 0.5,
//         easing: 'linear',
//     });
//     sr.reveal('.card__title, .card__text', {
//         reset: true,
//         delay: 400,
//         origin: 'bottom',
//         duration: 500,
//         scale: 0.5,
//         easing: 'linear',
//     });
