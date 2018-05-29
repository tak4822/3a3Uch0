import { TweenLite, Expo, Power1 } from 'gsap/TweenMax';

export default function() {
  $('.expandButton').on('click', function() {
    const contents = $(this).siblings('.detail-container');
    TweenLite.fromTo($(this), 0.3, {
      alpha: 1,
      filter: 'blur(0px)',
      y: 0,
    },{
      alpha: 0,
      filter: 'blur(5px)',
      y: 10,
      ease: Power1.easeIn,
      onComplete: function() {
        contents.show(500).css({'margin': '20px auto'});
        this.target[0].style.display = 'none';
        TweenLite.fromTo(contents, 1, {
          alpha: 0,
          y: 0,
        },{
          delay: 0.5,
          alpha: 1,
          y: 10,
          ease: Expo.easeOut,
        })
      },
    })
  })
}