//bgswitcher.js
jQuery(function ($) {
  $("header").bgSwitcher({
    images: [
      "HappyHack_sozai/images/background1.jpg",
      "HappyHack_sozai/images/background2.jpg",
      "HappyHack_sozai/images/background3.jpg",
      "HappyHack_sozai/images/background4.jpg",
      "HappyHack_sozai/images/background5.jpg",
    ],
    Interval: 5000,
    start: true,
    loop: true,
    shuffle: false,
    effect: "fade",
    duration: 1500,
    easing: "swing",
  });
});

//slick.js
$(".slider").slick({
  arrows: true,
  slidesToShow: 4,
  dots: true,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
