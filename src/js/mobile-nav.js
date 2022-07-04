const menuTrigger = document.querySelector('.siteHeader__mobileNavTrigger');
const menuCloseTrigger = document.querySelector('.mobileNav__close');
const mobileNav = document.querySelector('#mobileNav');

menuTrigger.addEventListener('click', openMenu)
menuCloseTrigger.addEventListener('click', closeMenu)

function openMenu() {
  menuTrigger.setAttribute('aria-expanded', 'true');
  document.querySelector('body').classList.add('noScroll');
}

function closeMenu() {
  menuTrigger.setAttribute('aria-expanded', 'false');
  document.querySelector('body').classList.remove('noScroll');
}

const container = document.getElementById('mobileNav');

const trap = focusTrap.createFocusTrap(container, {
  onActivate: () => container.classList.add('active'),
  onDeactivate: () => container.classList.remove('active'),
  fallbackFocus: container,
});

document
  .getElementById('menuTrigger')
  .addEventListener('click', trap.activate);

document
  .getElementById('menuTriggerClose')
  .addEventListener('click', trap.deactivate);