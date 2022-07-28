let image1 = document.querySelector('main section.creations section.mini:nth-child(1) img');
let image2 = document.querySelector('main section.creations section.mini:nth-child(2) img');
let image3 = document.querySelector('main section.creations section.mini:nth-child(3) img');
let image4 = document.querySelector('main section.creations section.mini:nth-child(4) img');
let image5 = document.querySelector('main section.creations section.mini:nth-child(5) img');
let image6 = document.querySelector('main section.creations section.mini:nth-child(6) img');
let image7 = document.querySelector('main section.creations section.mini:nth-child(7) img');
let image8 = document.querySelector('main section.creations section.mini:nth-child(8) img');
let image9 = document.querySelector('main img:first-child');
let menu = document.querySelector('header .top-header i:nth-child(3)');
let close = document.querySelector('header .top-header i');
let navigation = document.querySelector('header .top-header nav');
let body = document.querySelector('body');
menu.addEventListener('click', () => {
   navigation.classList.add('show');
   body.classList.add('modal');
})
close.addEventListener('click', () => {
   navigation.classList.remove('show');
   body.classList.remove('modal');
})
if (window.innerWidth > 699){
   image1.setAttribute('src', './images/desktop/image-deep-earth.jpg');
   image2.setAttribute('src', './images/desktop/image-night-arcade.jpg');
   image3.setAttribute('src', './images/desktop/image-soccer-team.jpg');
   image4.setAttribute('src', './images/desktop/image-grid.jpg');
   image5.setAttribute('src', './images/desktop/image-from-above.jpg');
   image6.setAttribute('src', './images/desktop/image-pocket-borealis.jpg');
   image7.setAttribute('src', './images/desktop/image-curiosity.jpg');
   image8.setAttribute('src', './images/desktop/image-fisheye.jpg');
   image9.setAttribute('src', './images/desktop/image-interactive.jpg');
}
