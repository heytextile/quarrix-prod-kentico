// Version 1.1.0

(function () {
    // Create and append the <link> tag
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    // Create and append the <script> tag
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    document.head.appendChild(script);

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
        setTimeout(() => {
            let swiper = new Swiper(cardsSwiper, {
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                navigation: {
                    nextEl: ".cards-swiper__right",
                    prevEl: ".cards-swiper__left",
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            });
        }, 500);
    }
})();
