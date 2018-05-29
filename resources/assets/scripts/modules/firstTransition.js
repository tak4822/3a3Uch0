import headerTransition from '../transitions/header';
import frontPageTransition from '../transitions/frontPage';

export default function() {
  const h = $(window).height();
  const w = $(window).width();

  const img = $("<img />")
  .attr('src', require('../../images/loadingAnimation.gif'))
  .css({
    'width': '80px',
    'position': 'fixed',
    'top': h / 2 - 40 + 'px',
    'left': w / 2 - 40 + 'px',
  });

  $('.transition-overlay')
  .append(img)
  .height(h)
  .width(w)
  .css({
    'top': 0,
  })
  .fadeIn(100);

  $(window).on('load', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollIntoView();

    $('.transition-overlay').delay(800).fadeOut(300);
    setTimeout(() => {
      $('#site-wrap').css('opacity', 1);
    }, 1500, function() {
      frontPageTransition();
    })
    setTimeout(function () {
      headerTransition();
    }, 3500);
  });
}