document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let counter = 0;
    const size = carouselItems[0].clientWidth;
    
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) return;
        counter++;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });
});
