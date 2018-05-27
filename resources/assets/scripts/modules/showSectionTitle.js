import { TweenLite, Power1 } from 'gsap/TweenMax';

export default function(el) {
  const deco = el.querySelector('.deco');
  TweenLite.fromTo(deco, 0.5,
    {
      boxShadow: 'rgba(0, 0, 0, 0) 0 1px 3px',
    },
    {
      boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 3px',
      ease: Power1.easeOut,
    });
  const firstViewText = el.querySelector('.white-block');
  TweenLite.to(firstViewText, 1, {
    delay: 0.3,
    y: -100,
    ease: Power1.easeInOut,
  });
}
