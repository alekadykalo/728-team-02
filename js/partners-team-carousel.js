window.addEventListener('load', () => {
    const leftBtn = document.querySelector('.carousel__prev');
    const rightBtn = document.querySelector('.carousel__next');
    const sld = document.querySelector('.partners__carousel');
    const img = document.querySelectorAll('.partners__carousel-img');
    let counter = 0;
    const stepSize = img[0].clientWidth;

    sld.style.transform = 'translateX(' + `${stepSize * counter}px)`;
    rightBtn.addEventListener('click', () => {
        if (window.innerWidth < 640 && counter >= img.length - 1) counter = - 1;
        else if (window.innerWidth >= 640 && counter > 5) counter = -1;
        else if (window.innerWidth >= 950 && counter > 4) counter = -1;
        counter++;
        sld.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });

    leftBtn.addEventListener('click', () => {
        if (window.innerWidth < 640 && counter <= 0) counter = img.length;
        else if (window.innerWidth >= 640 && counter <= 0) counter = img.length - 2;
        counter--;
        sld.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });


})
