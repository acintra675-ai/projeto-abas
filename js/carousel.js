document.addEventListener('DOMContentLoaded', function() {
    
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-nav.next');
    const prevButton = document.querySelector('.carousel-nav.prev');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const indicators = Array.from(document.querySelectorAll('.indicator'));

    const slideCount = slides.length;
    let currentSlideIndex = 0; 
    const autoSlideIntervalTime = 3000; 

    
    const moveToSlide = (targetIndex) => {
        
        const amountToMove = targetIndex * -100;
        track.style.transform = `translateX(${amountToMove}%)`;
        currentSlideIndex = targetIndex;
        updateIndicators(targetIndex);
    };

    
    const updateIndicators = (targetIndex) => {
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[targetIndex].classList.add('active');
    };

    
    nextButton.addEventListener('click', () => {
        let nextIndex = (currentSlideIndex + 1) % slideCount; 
        moveToSlide(nextIndex);
        resetAutoSlide();
    });

    
    prevButton.addEventListener('click', () => {
        let prevIndex = currentSlideIndex - 1;
        
        if (prevIndex < 0) {
            prevIndex = slideCount - 1;
        }
        moveToSlide(prevIndex);
        resetAutoSlide();
    });

    
    indicatorsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('indicator')) {
            const targetIndex = parseInt(e.target.getAttribute('data-slide-index'));
            moveToSlide(targetIndex);
            resetAutoSlide();
        }
    });

    

    const startAutoSlide = () => {
        return setInterval(() => {
            let nextIndex = (currentSlideIndex + 1) % slideCount;
            moveToSlide(nextIndex);
        }, autoSlideIntervalTime);
    };

    let autoSlideInterval = startAutoSlide();

    
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = startAutoSlide();
    };

    
    const carouselContainer = document.querySelector('.carousel-container');
    
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    
    carouselContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = startAutoSlide();
    });

});