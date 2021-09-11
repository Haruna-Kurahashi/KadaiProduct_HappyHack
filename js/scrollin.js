$(function () {
  $(window).scroll(function () {
    $(".Introduction").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".Courses").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".Images").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

$(function () {
  $(window).scroll(function () {
    $(".Access").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});
