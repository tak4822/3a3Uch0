import { TweenLite, Power1 } from 'gsap/TweenMax'

export default function() {
  // const $letter = $('.kakucho-name');
  // $('.kakucho-name').addClass('shadowAnim').css('transform', 'translate3d(0, 0, 100)');
  const kakucho = $('.kakucho-name');
  TweenLite.fromTo(kakucho, 0.8, {
      textShadow: 'rgba(0, 0, 0, 0) 0 2px 2px',
    },
    {
    delay: 1,
    textShadow: 'rgba(0, 0, 0, 0.3) 0 1px 2px',
    ease: Power1.easeIn,
  });

  const firstViewText = $('.text-anim-wrapper.first').find('.white-block');
  TweenLite.to(firstViewText, 0.8, {
    y: '-100%',
    ease: Power1.easeIn,
  });

  setTimeout(() => {

    $('.scroll-ui').addClass('animStart');
  }, 1500)
}