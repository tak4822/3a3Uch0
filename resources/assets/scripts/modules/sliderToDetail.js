import { TweenLite, Expo, Power4, Power2, Back } from 'gsap/TweenMax';
import ShapeOverlays from '../modules/overlay';

export default function(data) {
  const slider = document.getElementById('slider');
  const elmOverlay = document.querySelector('.shape-overlays');
  const overlay = new ShapeOverlays(elmOverlay);

  // stop bubbling from images
  const el = document.getElementById('slider');
  const imgs = Array.from(el.querySelectorAll('img'));
   imgs.forEach((el) => {
     el.addEventListener('click', function(e) {
       e.stopPropagation();
     });
   });
  // stop bubbling from titles
  const slideTitle = document.getElementById('slide-title');
  slideTitle.addEventListener('click', function(e) {
    e.stopPropagation();
  });


  slider.addEventListener('click', function() {
    const currentPagenationEL = document.getElementById('pagination').querySelectorAll('.active')[0];
    const currentId = parseInt(currentPagenationEL.dataset.slide, 10);
    const currentData = data[currentId];
    console.log(currentData);

    // container zIndex up
    document.querySelector('.regular-container.products').style.zIndex = 200;
    // create overlay and animate
    document.querySelector('.shape-overlays').style.display = 'block';
    overlay.toggle();

    // make image bigger and
    const currentImage = imgs[currentId];
    currentImage.style.display = 'block';
    currentImage.style.zIndex = 10;
    currentImage.style.opacity = 1;

    // scale amount responsive
    let scaleAmount = 1.6;
    if (window.matchMedia('(min-width:550px)').matches) {
      scaleAmount = 1.4;
    }
    if (window.matchMedia('(min-width:900px)').matches) {
      scaleAmount = 1.2;
    }
    // scale origin responsive
    let scaleOrigin = '1% 90%';
    if (window.matchMedia('(min-width:1025px)').matches) {
      scaleOrigin = '50% 50%';
    }

    TweenLite.fromTo(currentImage, 0.6, {
      scale: 1,
    },{
      transformOrigin: scaleOrigin,
      scale: scaleAmount,
      ease: Power4.easeOut,
    })

    // text rotate

    // slideToX amount responsive
    let slideXAmount = -70;
    if (window.matchMedia('(min-width:550px)').matches) {
      slideXAmount = -100;
    }
    if (window.matchMedia('(min-width:900px)').matches) {
      slideXAmount = -170;
    }
    if (window.matchMedia('(min-width:1025px)').matches) {
      slideXAmount = -240;
    }
    if (window.matchMedia('(min-width:1400px)').matches) {
      slideXAmount = -320;
    }


    let slideYAmount = -120;
    if (window.matchMedia('(min-width:1025px)').matches) {
      slideYAmount = -60;
    }

    TweenLite.to(slideTitle, 0.8, {
      y: slideYAmount,
      x: slideXAmount,
      transformOrigin:'0% 50%',
      rotation: 0,
      ease: Expo.easeOut,
    });

    // fadeIn contents
    const contentsEl = document.querySelector('.contents-container');
    const deviceHeight = document.documentElement.clientHeight;
    let imageHeight = 200;
    if (window.matchMedia('(min-width:550px)').matches) {
      imageHeight = 350;
    }
    if (window.matchMedia('(min-width:700px)').matches) {
      imageHeight = 400;
    }
    if (window.matchMedia('(min-width:900px)').matches) {
      imageHeight = 500;
    }
    let contentsUpSpace = - ( deviceHeight - ( deviceHeight * 0.4 + imageHeight * (scaleAmount * 0.7) ));

    if (window.matchMedia('(min-width:1025px)').matches) {
      contentsUpSpace = - 100;
    }
    contentsEl.style.display = 'block';
    contentsEl.style.opacity = 1;
    TweenLite.fromTo(contentsEl, 1.2, {
      filter: 'blur(10px)',
      y: 0,
    },{
      delay: 0.6,
      filter: 'blur(0px)',
      y: contentsUpSpace,
      ease: Expo.easeInOut,
    })

    // appear closeButton and attach clickEvent
    const closeButton = document.querySelector('.close-button');
    closeButton.style.display = 'block';
    const closeButtonBars = closeButton.querySelectorAll('.bar');
    const barOne = closeButton.querySelector('.one');
    const barTwo = closeButton.querySelector('.two');

    TweenLite.fromTo(closeButtonBars, 0.4, {
      rotation: 0,
      x: -200,
    },{
      delay: 0.4,
      rotation: 0,
      x: 0,
      ease: Power2.easeInOut,
      onComplete: function() {
        TweenLite.to(barOne, 0.3, {
          delay: 0.4,
          rotation: 45,
          ease: Back.easeOut,
        })
        TweenLite.to(barTwo, 0.3, {
          delay: 0.4,
          rotation: -45,
          ease: Back.easeOut,
        })
      },
    })

    // handle close
    closeButton.addEventListener('click', () => {
      // delete closeButton
      TweenLite.to(closeButtonBars, 0.3, {
        rotation: 0,
        ease: Power2.easeInOut,
        onComplete: function() {
          TweenLite.to(closeButtonBars, 0.5, {
            delay: 0.3,
            rotation: 0,
            x: -100,
            onComplete: function() {
              overlay.toggle();
              closeButton.style.display = 'none';
            },
          });

        },
      });
      // title text
      let titleSlideBack = 30;
      TweenLite.to(slideTitle, 0.8, {
        delay: 0.5,
        y: 0,
        x: titleSlideBack,
        transformOrigin:'0% 50%',
        rotation: -90,
        ease: Expo.easeOut,
      });

      // image
      TweenLite.to(currentImage, 0.6, {
        delay: 0.5,
        scale: 1,
        ease: Power2.easeInOut,
        onComplete: function() {
          currentImage.style.display = 'none';
          currentImage.style.zIndex = -1;
          currentImage.style.opacity = 0;
        },
      });

      TweenLite.to(contentsEl, 0.4, {
        delay: 0.5,
        opacity: 0,
        filter: 'blur(10px)',
        y: 0,
        ease: Expo.easeInOut,
      })
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

      // - container zIndex down
      setTimeout(() => {
        contentsEl.style.display = 'none';
        document.querySelector('.shape-overlays').style.display = 'none';
        document.querySelector('.regular-container.products').style.zIndex = -2;
      }, 2000)
    });



    document.getElementById('lead').innerHTML = currentData['lead'];
    document.getElementById('subImage').src = currentData['subImage'];
    document.getElementById('description').innerHTML = currentData['description'];
    document.querySelector('.contents-container').style.display = 'block';
  }, false)
}