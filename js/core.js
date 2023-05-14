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

});