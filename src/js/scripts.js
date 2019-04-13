$(window).resize(function() {
  $('.examples_slider')[0].slick.refresh();
});

var $status = $('.examples_status');
var $count = $('.examples_count');
var $slickElement = $('.examples_slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text('0' + i);
  $count.text('0' + slick.slideCount);
});

$('.examples_slider').slick({});
