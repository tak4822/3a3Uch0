import { TweenLite, Power1 } from 'gsap/TweenMax'

export default function() {
  window.scrollTo(0, 0);
  const kakucho = $('.kakucho-name');
  TweenLite.fromTo(kakucho, 0.8, {
      textShadow: 'rgba(0, 0, 0, 0) 0 1px 2px',
    },
    {
    delay: 1,
    textShadow: 'rgba(0, 0, 0, 0.2) 0 1px 2px',
    ease: Power1.easeOut,
  });

  const firstViewText = $('.text-anim-wrapper.first').find('.white-block');
  TweenLite.to(firstViewText, 1.2, {
    y: -100,
    ease: Power1.easeIn,
  });

  setTimeout(() => {
    $('.scroll-ui').addClass('animStart');
  }, 500)
}