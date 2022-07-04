const menuTrigger = document.querySelector('.siteHeader__mobileNavTrigger');
const menuCloseTrigger = document.querySelector('.mobileNav__close');
const mobileNav = document.querySelector('#mobileNav');
const container = document.getElementById('mobileNav');

// Listen to Open and Close Triggers
menuTrigger.addEventListener('click', openMenu)
menuCloseTrigger.addEventListener('click', closeMenu)

// Open Menu
// Add Active Class, Add aria attr, Add noScroll to body
function openMenu() {
  container.classList.add('active')
  menuTrigger.setAttribute('aria-expanded', 'true');
  document.querySelector('body').classList.add('noScroll');
}

// Close
// Romove Active Class, Remove aria attr, Remove noScroll to body
function closeMenu() {
  container.classList.remove('active')
  menuTrigger.setAttribute('aria-expanded', 'false');
  document.querySelector('body').classList.remove('noScroll');
}

// Set Focus Trap on Mobile Menu w/ Fallback
const trap = focusTrap.createFocusTrap(container, {
  onActivate: () => openMenu(),
  onDeactivate: () => closeMenu(),
  fallbackFocus: container,
});

// On Click activate focus trap
document
  .getElementById('menuTrigger')
  .addEventListener('click', trap.activate);

// On Click deactivate focus trap
document
  .getElementById('menuTriggerClose')
  .addEventListener('click', trap.deactivate);

document
  .querySelector('.mobileNav__menuLink')
  .addEventListener('click', trap.deactivate);