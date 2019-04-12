$('.examples_slider').slick({
  dots: false,
//   autoplay: true, 
//   autoplaySpeed: 4000,
 });  

$(window).resize(function(){
  $('.examples-slider')[0].slick.refresh();
}); 