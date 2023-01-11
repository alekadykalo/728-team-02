(function () {
  const testimonials = [
    {
      description:
        "We have been cooperating with GreenWind for 5 years, and are completely satisfied. We ordered two 10 kW windmills for a small production workshop. There was not a single breakdown of our equipment. All scheduled warranty works were carried out on time. Thanks for promoting and simplifying the use of renewable energy sources!",
      date: "October 12, 2018",
      image: "img/testimonials/susan-rondel.jfif",
      slideTitle: "Susan Rondel",
      position: "Marketing Director at EPM Production",
    },
    {
      description:
        "We are engaged in the production of wood products, we have a lot of equipment, so a stable energy supply is important to us. Thanks to GreenWind, we received excellent equipment, and now we are not dependent on centralized energy supply. When we expand, we will definitely contact this reliable company to install new wind-driven generators.",
      date: "February 23, 2019",
      image: "img/testimonials/dan-ericsson.jfif",
      slideTitle: "Dan Ericsson",
      position: "CEO at Wood4You",
    },
    {
      description:
        "We implemented a project of a completely environmentally friendly farm, and ordered GreenWind wind-driven generators. The service of this company is top notch. The equipment works stably, in case of any problems, we can always count on help and contact the specialists of this company. I hope for a long and productive cooperation with GreenWind!",
      date: "December 04, 2019",
      image: "img/testimonials/jessica-peterson.jfif",
      slideTitle: "Jessica Peterson",
      position: "Chief Engineer at Eco Future",
    },
    {
      description:
        "	Previously, we used wind-driven generators of another company, but due to equipment breakdowns, we decided to change the operator. We are delighted with GreenWind! They offer high-quality services, no interruptions in power generation. And the cost is attractive. We will continue to cooperate with this company in the future.",
      date: "February 17, 2020",
      image: "img/testimonials/carl-simmoms.jfif",
      slideTitle: "Carl Simmoms",
      position: "CEO at Fine House",
    },
  ];

  function renderTestimonials(testimonials) {
    const testimonialsContainer = document.querySelector(".swiper-wrapper");
    for (const testimonial of testimonials) {
      testimonialsContainer.innerHTML += `<div class="swiper-slide">
			<p class="testimonials__description">
			${testimonial.description}
			</p>
			<div class="testimonials__container">
				<p class="testimonials__date">${testimonial.date}</p>
				<img class="testimonials__image" src="${testimonial.image}" alt="${testimonial.slideTitle}">
				<h3 class="slide__title testimonials__slide-title">${testimonial.slideTitle}</h3>
				<p class="testimonials__position">${testimonial.position}</p>
			</div>
		</div>`;
    }
  }
  renderTestimonials(testimonials);

  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
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
      960: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
    },
  });
})();
