// Jquery Dom Ready 
// Jquery Dom Ready 

$(function () {

  // Slick Slider
  $('#slickMe').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // wow js 
  new WOW().init();

  // preloader
  $(window).load(function () {
    $(".Preloader").addClass("activatePreloader");
  });

  // Back to top Scroll event
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });

  // Back to top event
  $('.go-top').click(function () {
    $("html, body").animate({
      scrollTop: "0"
    }, 500);
  });

});