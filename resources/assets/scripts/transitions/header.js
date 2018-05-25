// import { TweenLite } from 'gsap/TweenMax'

export default function() {
  $('.logo-svg').addClass('shadowAnim');

  const $list = $('.nav-title');
  $.each($list, function(i) {
    $list
    .eq(i)
    .delay(i * 150)
    .queue(function(next) {
      $(this).addClass('shadowAnim');
      next();
    })
  });
}