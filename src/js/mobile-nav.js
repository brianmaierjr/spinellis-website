const menuTrigger = document.querySelector('.siteHeader__mobileNavTrigger');
const menuCloseTrigger = document.querySelector('.mobileNav__close');
const mobileNav = document.querySelector('.mobileNav');

menuTrigger.addEventListener('click', function () {
  console.log('open');
  mobileNav.classList.toggle('active');
  document.querySelector('body').classList.toggle('no-scroll');
})

menuCloseTrigger.addEventListener('click', function () {
  mobileNav.classList.toggle('active');
  document.querySelector('body').classList.toggle('no-scroll');
})