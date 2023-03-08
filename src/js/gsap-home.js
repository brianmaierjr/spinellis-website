// Header
var intro = gsap.timeline({
	paused: true,
	defaults: { duration: 0.5, ease: "expo.out" },
});
intro
	.from(".hero__video", {
		opacity: 0,
		duration: 1,
		autoAlpha: 0,
	})
	.from(".hero__text h1 > *", {
		stagger: 0.25,
		opacity: 0,
		y: 100,
		autoAlpha: 0,
	})
	.from(".hero__text .btn", {
		opacity: 0,
		y: 100,
		autoAlpha: 0,
	});

window.addEventListener("load", function () {
	intro.play();
});

// Locations
const locations = document.querySelectorAll(".locationCard");
locations.forEach((el) => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: "top 70%",
		},
		y: 100,
		opacity: 0,
		stagger: 0.5,
		ease: "expo.out",
		autoAlpha: 0,
	});
});

// App
gsap.from(".mobileApp__content > *", {
	scrollTrigger: {
		trigger: ".mobileApp__content",
		start: "top 70%",
	},
	x: 100,
	opacity: 0,
	stagger: 0.5,
	ease: "expo.out",
	autoAlpha: 0,
});

// March
gsap.from(".merch__galleryImg", {
	scrollTrigger: {
		trigger: ".merch__gallery",
		start: "top 70%",
	},
	y: 100,
	opacity: 0,
	stagger: 0.5,
	ease: "expo.out",
	autoAlpha: 0,
});
