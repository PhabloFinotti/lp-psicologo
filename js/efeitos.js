$(function () {
  // Menu Fixo
  $(window).bind('scroll', function () {
    var navHeight = $('.header').height();
    if ($(window).scrollTop() > navHeight) {
      $('.header-bottom').addClass('header-fixo');
    } else {
      $('.header-bottom').removeClass('header-fixo');
    }
  });
  // Menu Fixo

  // Link Ancora
  // Select all links with hashes
  $('a[href*="#"].scroll')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  // Link Ancora

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
});
