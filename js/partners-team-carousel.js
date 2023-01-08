window.addEventListener('load', () => {
	const leftBtn = document.querySelector('.carousel__prev');
	const rightBtn = document.querySelector('.carousel__next');
	const sld = document.querySelector('.partners__carousel');
	const img = document.querySelectorAll('.partners__carousel-img');
	let counter = 0;
	const stepSize = img[0].clientWidth;

	sld.style.transform = 'translateX(' + `${stepSize * counter}px)`;
	rightBtn.addEventListener('click', () => {
		counter >= img.length - 1 ? (counter = -1) : null;
		counter++;
		sld.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	});

	leftBtn.addEventListener('click', () => {
		if (counter <= 0) counter = 0;
		counter--;
		sld.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
	})
	
})


