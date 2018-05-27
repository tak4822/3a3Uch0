import { TweenLite, Power1, Expo } from 'gsap/TweenMax';

export default function() {
  // const windowHeight =  $(window).height();
  let isScrolled = false;

  window.onscroll = function() {
    if (!isScrolled) {
      console.log('scrolled');
      transionToSecondView();
    }
    isScrolled = true;
  };
}

const triangle = $('.front-view-triangle');
const kakucho = document.querySelector('.kakucho-name');
const firstViewText = $('.text-anim-wrapper.first').find('.white-block');
const firstView = $('.first-view');

const showText = () => {
  const philosophyText = $('.philosophy-text-container');
  philosophyText.css('opacity', 1);

  TweenLite.fromTo(philosophyText, 0.8,
    {
      autoAlpha: 0,
      filter: 'blur(5px)',
      y: 20,
    },
    {
      autoAlpha: 1,
      filter: 'blur(0px)',
      y: 0,
      ease: Expo.easeIn,
    });
};

const showPhilosophy = () => {
  const philosophyLetter = $('.philosophy-letter');
  TweenLite.fromTo( philosophyLetter, 0.6,
    {
      autoAlpha: 0,
      filter: 'blur(15px)',
      x: -50,
    },
    {
      autoAlpha: 1,
      filter: 'blur(0px)',
      x: 0,
      ease: Expo.easeIn,
      onComplete: showText,
    });
  $('.philosophy').css('opacity', 1);
};

const triangleAnimationTween = (el) => {
  let scaleAmount = 8;

  if (window.matchMedia('(max-width:900px)').matches) {
    scaleAmount = 7;
  }
  if (window.matchMedia('(max-width:550px)').matches) {
    scaleAmount = 6;
  }

  let XAmount = -400;
  if (window.matchMedia('(max-width:1024px)').matches) {
    XAmount = -320;
  }
  if (window.matchMedia('(max-width:900px)').matches) {
    XAmount = -240;
  }
  if (window.matchMedia('(max-width:550px)').matches) {
    XAmount = -100;
  }

  let YAmount = 70;
  if (window.matchMedia('(max-width:1024px)').matches) {
    YAmount = -160;
  }
  if (window.matchMedia('(max-width:900px)').matches) {
    YAmount = -100;
  }
  if (window.matchMedia('(max-width:550px)').matches) {
    YAmount = -70;
  }

  TweenLite.to(el, 0.8, {
    delay: 0.2,
    rotationZ: '-=200_cw',
    scale: scaleAmount,
    x: XAmount,
    y: YAmount,
    ease: Expo.easeIn,
    onComplete: showPhilosophy,
  });
}

const triangleAnimation = () => {
  TweenLite.to(triangle, 1.5, {
    filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 0 1px 2px)', // show triangle
    ease: Power1.easeInOut,
    onComplete: function() {
      triangleAnimationTween(triangle);
      const animationToLongTri = document.getElementById('animation-to-long-tri');
      animationToLongTri.beginElement(); // start changing shape
    },
  });
};

const shadowOutKakucho = () => {
  TweenLite.fromTo(
    kakucho,
    0.6,
    {
      textShadow: 'rgba(0, 0, 0, 0.2) 0 1px 2px',
    },
    {
      delay: 0.2,
      textShadow: 'rgba(0, 0, 0, 0) 0 1px 2px',
      ease: Power1.easeIn,
      onComplete: function() {
        TweenLite.to(firstView, 0.3, {
          autoAlpha: 0,
          ease: Power1.easeIn,
          onComplete: triangleAnimation,
        });
      },
    });
}

const transionToSecondView = () => {
  TweenLite.fromTo(firstViewText, 0.6, {
      y: '-100%',
    },
    {
      y : '0%',
      ease: Power1.easeIn,
      onComplete: shadowOutKakucho,
    });
  $('.scroll-ui').fadeOut();
};
