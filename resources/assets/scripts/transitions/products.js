import { TweenLite, Expo, Power2 } from 'gsap/TweenMax';

export default {
  mobileIn() {
    this.shadowPagenation();
    this.shadowSliderBox();
    this.fadeInCanvas();
    setTimeout(() => {
      this.showControlButtons();
      this.showSliderTitle();
    }, 1300)
  },
  desktopIn() {
    this.shadowPagenation();
    this.shadowSliderBox();
    this.fadeInCanvas();
    setTimeout(() => {
      this.showControlButtonsDesktop();
      this.showSliderTitle();
    }, 1300)
  },
  shadowPagenation() {
    // pagenations
    const pagenations = document.getElementById('pagination');
    const pagenationButtons = Array.from(pagenations.querySelectorAll('button'));

    pagenationButtons.forEach((button, i) => {
      TweenLite.to(button, 1, {
        delay: i / 4,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0 3px 12px',
        ease: Power2.easeIn,
      })
    });
    // .active
    setTimeout(() => {
      pagenationButtons[0].className = 'active';
    }, 2000);
  },
  shadowSliderBox() {
    // slider container
    // box-shadow: 0 3px 8px 4px rgba(0, 0, 0, 0.1);
    const slider = document.getElementById('slider');
    TweenLite.fromTo(slider, 1.2, {
      boxShadow: 'rgba(0, 0, 0, 0) 0 3px 8px',
    },{
      boxShadow: 'rgba(0, 0, 0, 0.1) 0 3px 8px',
      ease: Expo.easeOut,
    })
  },
  fadeInCanvas() {
    // canvas
    const canvas = document.querySelector('canvas');
    TweenLite.fromTo(canvas, 0.8,
      {
        autoAlpha: 0,
      },
      {
        delay: 1.5,
        autoAlpha: 1,
        ease: Expo.easeIn,
      });
  },
  showSliderTitle() {
    // slider title
    const slideTitleEl = document.getElementById('slide-title');
    TweenLite.fromTo( slideTitleEl, 0.9,
      {
        autoAlpha: 0,
        filter: 'blur(15px)',
        y: 40,
      },
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        ease: 'Expo.easeIn',
      });
  },
  showControlButtons() {
    // controll buttons
    const controlButtons = document.querySelectorAll('.control-buttons');
    TweenLite.fromTo( controlButtons, 0.9,
      {
        autoAlpha: 0,
        filter: 'blur(10px)',
        y: 20,
      },
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        ease: 'Expo.easeIn',
      });
  },
  showControlButtonsDesktop() {
    const controlButtons = document.querySelectorAll('.control-buttons');
    TweenLite.fromTo( controlButtons, 0.9,
      {
        autoAlpha: 0,
        filter: 'blur(10px)',
        x: -20,
      },
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        x: 0,
        ease: 'Expo.easeIn',
      });
  },
}