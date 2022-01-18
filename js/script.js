const menuBtn = document.querySelector('.menu-btn');

var closeButton = document.querySelector('.headerclose a');
var leftButton = document.querySelector('.header-menu-grid');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    leftButton.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    leftButton.classList.remove('open');
    menuOpen = false;
  }
});
// /* Menu button */

// closeButton.addEventListener('click', function () {
//   leftButton.classList.remove('open');
//   leftButton.classList.add('active');
// });


var input = document.querySelector('#clear');
var textarea = document.querySelector('#output');

input.addEventListener('click', function () {
  textarea.value = '';
}, false);


/* SwiperJs */

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});