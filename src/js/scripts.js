// Get the current year in Footer
document.getElementById("current-year").innerHTML = new Date().getFullYear();

// Logo Animation
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mediaQuery.matches) {
	// Do nothing
	video = document.getElementById("hero__video");
	video.pause();
	video.setAttribute("controls", "controls");
} else {
	var tid = setInterval(animateLogo, 400);
	function animateLogo() {
		const animatedLogos = document.querySelectorAll(
			".animatedLogo img.active"
		);

		animatedLogos.forEach((logo) => {
			if (!logo.nextElementSibling) {
				logo.parentElement
					.querySelector("img:first-child")
					.classList.add("active");
				logo.classList.remove("active");
			} else {
				logo.nextElementSibling.classList.add("active");
				logo.classList.remove("active");
			}
		});
	}
	function abortTimer() {
		// to be called when you want to stop the timer
		clearInterval(tid);
	}
}

// Mobile Navigation
const menuTrigger = document.querySelector(".siteHeader__mobileNavTrigger");
const menuCloseTrigger = document.querySelector(".mobileNav__close");
const mobileNav = document.querySelector("#mobileNav");
const container = document.getElementById("mobileNav");

// Listen to Open and Close Triggers
menuTrigger.addEventListener("click", openMenu);
menuCloseTrigger.addEventListener("click", closeMenu);

// Open Menu
// Add Active Class, Add aria attr, Add noScroll to body
function openMenu() {
	container.classList.add("active");
	menuTrigger.setAttribute("aria-expanded", "true");
	document.querySelector("body").classList.add("noScroll");
}

// Close
// Romove Active Class, Remove aria attr, Remove noScroll to body
function closeMenu() {
	container.classList.remove("active");
	menuTrigger.setAttribute("aria-expanded", "false");
	document.querySelector("body").classList.remove("noScroll");
}

// Set Focus Trap on Mobile Menu w/ Fallback
const trap = focusTrap.createFocusTrap(container, {
	onActivate: () => openMenu(),
	onDeactivate: () => closeMenu(),
	fallbackFocus: container,
});

// On Click activate focus trap
document.getElementById("menuTrigger").addEventListener("click", trap.activate);

// On Click deactivate focus trap
document
	.getElementById("menuTriggerClose")
	.addEventListener("click", trap.deactivate);
