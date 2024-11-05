var TrendingSlider = new Swiper('.trending-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },

  autoplay: {
    delay: 3000, // 3 seconds for slide transition
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },

  on: {
    slideChange: function () {
      const slides = this.slides;
      // Pause all videos and reset their current time
      slides.each(function (index, slide) {
        const video = slide.querySelector('video');
        if (video) {
          video.pause();
          video.currentTime = 0; // Reset to the beginning
        }
      });

      // Play the video in the active slide
      const activeSlide = slides[this.activeIndex];
      const activeVideo = activeSlide.querySelector('video');
      if (activeVideo) {
        activeVideo.play(); // Play the video in the active slide
      }

      // Fade-in effect for the video information
      slides.removeClass('fade-in active');
      $(activeSlide).find('.fade-in').addClass('active');
    },
  },
});

// Autoplay the video in the first slide on initialization
TrendingSlider.on('init', function () {
  const activeSlide = this.slides[this.activeIndex];
  const activeVideo = activeSlide.querySelector('video');
  if (activeVideo) {
    activeVideo.play(); // Play the video in the first slide
  }
});

// Initialize the swiper
TrendingSlider.init();




