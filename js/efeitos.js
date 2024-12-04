$(function () {
  // Menu Fixo
  $(window).bind('scroll', function () {
    var navHeight = $('.header').height();

    if ($(window).scrollTop() > navHeight) {
      $('.header')
        .addClass('fixed')
        .attr('style', `--header-top-height: -${$('.header-top').outerHeight()}px`);
    } else {
      $('.header').removeClass('fixed');
    }
  });
  // Menu Fixo

  // Swiper Carrousel
  var swiper = new Swiper('.card_slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // Swiper Carrousel

  // Swiper Carrousel
  var swiper = new Swiper('.event__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-event-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // Swiper Carrousel
});
