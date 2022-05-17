const swiper = new Swiper('.swiper1440', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  
  },
         autoplay: {
          delay: 5000,
          },
});


const swiper1 = new Swiper('.swiper1920', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  
  },
  autoplay: {
  delay: 5000,
},
});