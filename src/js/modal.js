const modals = document.querySelectorAll(".modalTrigger");

modals.forEach((modal) => {
	const modalTrigger = modal;
	const modalContainerId = modalTrigger.dataset.modal;
	const modalContainer = document.getElementById(modalContainerId);
	const modalOverlay = modalContainer.querySelector(".modal__overlay");
	const modalCloseTrigger = modalContainer.querySelector(
		".modalTrigger__close"
	);

	// Listen to Open and Close Triggers
	modalTrigger.addEventListener("click", openModal);
	modalCloseTrigger.addEventListener("click", closeModal);

	// Open Menu
	// Add Active Class, Add aria attr, Add noScroll to body
	function openModal() {
		modalContainer.classList.add("active");
		document.querySelector("body").classList.add("noScroll");
	}

	// Close
	// Romove Active Class, Remove aria attr, Remove noScroll to body
	function closeModal() {
		modalContainer.classList.remove("active");
		document.querySelector("body").classList.remove("noScroll");
	}

	// Set Focus Trap on Mobile Menu w/ Fallback
	const trap = focusTrap.createFocusTrap(modalContainer, {
		onActivate: () => openModal(),
		onDeactivate: () => closeModal(),
		fallbackFocus: modalContainer,
	});

	// On Click activate focus trap
	modalTrigger.addEventListener("click", trap.activate);

	// On Click deactivate focus trap
	modalCloseTrigger.addEventListener("click", trap.deactivate);
	modalOverlay.addEventListener("click", trap.deactivate);
});
