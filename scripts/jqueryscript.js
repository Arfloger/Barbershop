$(document).ready(function () {

  $('.reviews__list').slick({
    arrows: true,
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
    }
  ]
  });

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.advantages__list').slick({
        arrows: false,
        dots: true
      });
    }
  });
});
