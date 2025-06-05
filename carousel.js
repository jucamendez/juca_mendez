document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let counter = 0;
    const size = carouselItems[0].clientWidth;
    
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) return;
        counter++;
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        updateCarousel();
    });
    
    // Auto-slide (opcional)
    setInterval(() => {
        if (counter >= carouselItems.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
    }, 5000);
});