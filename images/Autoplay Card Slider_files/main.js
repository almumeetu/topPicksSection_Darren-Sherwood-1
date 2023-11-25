

let swiper = new Swiper(".wrapper", {
  loop: true,
  autoplay: true,
  autoplayTimeout: 100,
  autoplayHoverPause: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 5,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  },
});
