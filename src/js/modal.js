const modalTrigger = document.querySelector(".,modalTrigger");
const modalCloseTrigger = document.querySelector(".modalTrigger__close");
const modalContainer = document.querySelector(".modal__container");

// Listen to Open and Close Triggers
modalTrigger.addEventListener("click", openMenu);
modalCloseTrigger.addEventListener("click", closeMenu);

// Open Menu
// Add Active Class, Add aria attr, Add noScroll to body
function openModal() {
	container.classList.add("active");
	modalTrigger.setAttribute("aria-expanded", "true");
	document.querySelector("body").classList.add("noScroll");
}

// Close
// Romove Active Class, Remove aria attr, Remove noScroll to body
function closeMenu() {
	container.classList.remove("active");
	modalTrigger.setAttribute("aria-expanded", "false");
	document.querySelector("body").classList.remove("noScroll");
}

// Set Focus Trap on Mobile Menu w/ Fallback
const trap = focusTrap.createFocusTrap(container, {
	onActivate: () => openModal(),
	onDeactivate: () => closeModal(),
	fallbackFocus: modalContainer,
});

// On Click activate focus trap
document
	.getElementById("modalTrigger")
	.addEventListener("click", trap.activate);

// On Click deactivate focus trap
document
	.getElementById("modalCloseTrigger")
	.addEventListener("click", trap.deactivate);
