$(document).ready(function () {
  function initSlickWhenVisible(selector) {
    const $slider = $(selector);

    function tryInit() {
      if ($slider.is(':visible') && !$slider.hasClass('slick-initialized')) {
        $slider.slick({
          dots: true,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev" aria-label="Prev"></button>',
          nextArrow: '<button type="button" class="slick-next" aria-label="Next"></button>',
          infinite: true,
          speed: 450,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
          autoplaySpeed: 3000,
          cssEase: 'linear',
          pauseOnHover: true,
          swipe: true,
          touchMove: true,
        });

        // Форсимо оновлення після завантаження картинок
        $slider.find('img').on('load', () => $slider.slick('setPosition'));
      } else if (!$slider.is(':visible')) {
        // якщо ще не видно, повторимо через 100ms
        setTimeout(tryInit, 100);
      }
    }

    tryInit();
  }

  initSlickWhenVisible('.receipts-slider');
});
