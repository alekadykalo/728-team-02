var swiper = new Swiper(".swiper", {
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: false,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 1,
		},
		765: {
			slidesPerView: 2,
			spaceBetween: 30,
			slidesPerGroup: 1,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 30,
			slidesPerGroup: 1,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
			slidesPerGroup: 1,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 30,
			slidesPerGroup: 1,
		}
	}
});