/* Version 1.0.0 */

(function () {
    const videoSection = document.querySelector('.quarrix_video_section__video');
    
    if (videoSection) {
        const video = videoSection.querySelector('video');

        videoSection.addEventListener('click', function() {
            if (video) {
                video.play()
                    .then(() => {
                        video.removeAttribute('poster');
                        video.setAttribute('controls', '');
                    })
                    .catch(error => {
                        console.error('Error:', error);
                });
            }
        });
    }
    
    const accordionTitles = document.querySelectorAll('.quarrix_faq_section__item_title_wrapper');

    if (accordionTitles) {
        accordionTitles.forEach(el => {
            el.addEventListener('click', () => {
                el.parentElement.classList.toggle('active');
            });
        });
    }

    const cardsSwiper = document.querySelector('.cards-swiper');

    if (cardsSwiper) {
        let swiper = new Swiper(cardsSwiper, {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            },
        });
    }
})(); 