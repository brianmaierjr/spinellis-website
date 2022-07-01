const menuTrigger = document.querySelector('.siteHeader__mobileNavTrigger');
const menuCloseTrigger = document.querySelector('.mobileNav__close');
const mobileNav = document.querySelector('.mobileNav');

menuTrigger.addEventListener('click', triggerMenu)
menuCloseTrigger.addEventListener('click', triggerMenu)

function triggerMenu() {
  mobileNav.classList.toggle('active');
  document.querySelector('body').classList.toggle('noScroll');
}