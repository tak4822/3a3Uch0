import { TweenLite, Power1, Expo, Back } from 'gsap/TweenMax';
import Barba from 'barba.js/dist/barba.min';

export default function() {
  // const windowHeight =  $(window).height();
  let isScrolled = false;

  document.getElementsByTagName("BODY")[0].addEventListener('click', function() {
    transionToSecondView();
  })

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
      onComplete: showButton,
    });
};


const showButton = () => {
  // show Button
  const ctaButton = document.getElementById('nextPageButton');
  const buttonText = ctaButton.querySelector('.link-text');
  // box-shadow: $box-shadow;
  TweenLite.fromTo(ctaButton, 0.6, {
    boxShadow: 'rgba(0, 0, 0, 0) 0 1px 3px',
  }, {
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 3px',
    ease: Expo.easeIn,
  });
  // color: $brand-primary;
  TweenLite.fromTo(buttonText, 0.8, {
    alpha: 0,
    y: 10,
  }, {
    delay: 1,
    y: 0,
    alpha: 1,
    onComplete: atachEventToButton,
  });
}

const atachEventToButton = () => {
  const ctaButton = document.getElementById('nextPageButton');
  const animationForCTA = document.getElementById('animation-for-cta');
  const svg = document.querySelector('.front-view-triangle');

  let hasBeenEntered = false;
  ctaButton.addEventListener("mouseenter", function() {
    if(!hasBeenEntered) {
      hasBeenEntered = true;
      TweenLite.to(svg, 0.4, {
        transformOrigin: '50% 50%',
        rotationZ: '-=200_cw',
        ease: Expo.easeInOut,
        onStart: function() {
          setTimeout(() => {
            animationForCTA.beginElement(); // start changing shape
          },200)
        },
      })
    }
  });

  ctaButton.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    // delete text
    const philosophyLetter = $('.philosophy-letter');
    TweenLite.to( philosophyLetter, 0.6, {
      autoAlpha: 0,
      filter: 'blur(15px)',
      x: 50,
      ease: Expo.easeIn,
    });

    const philosophyText = $('.philosophy-text-container');
    TweenLite.to(philosophyText, 0.6, {
      delay: 0.2,
      autoAlpha: 0,
      filter: 'blur(5px)',
      y: -20,
      ease: Expo.easeIn,
      onComplete: function() {
        // scale up svg
        TweenLite.to(svg, 0.4, {
          transformOrigin: '50% 50%',
          scale: 60,
          ease: Back.easeInOut,
          onComplete: function() {
            setTimeout(() => {
              Barba.Pjax.goTo('/products');
            }, 500)
          },
        })
      },
    });
  });
}

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
    onStart: function() {
      const animationToLongTri = document.getElementById('animation-to-long-tri');
      animationToLongTri.beginElement(); // start changing shape
    },
  });
}

const triangleAnimation = () => {
  TweenLite.to(triangle, 1.5, {
    filter: 'drop-shadow(rgba(0, 0, 0, 0.16) 0 1px 2px)', // show triangle
    ease: Power1.easeInOut,
    onComplete: function() {
      triangleAnimationTween(triangle);
    },
  });
};

const shadowOutKakucho = () => {
  TweenLite.fromTo(kakucho, 0.6,
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
