import { TweenLite, Expo } from 'gsap/TweenMax';
import showSectionTitle from '../modules/showSectionTitle';

export default {
  in() {
    const sectionTitle = document.querySelector('.sectionTitle-container');
    showSectionTitle(sectionTitle);

    const title = document.querySelector('.section-title');
    const contents = document.querySelector('.page-contents');

    TweenLite.fromTo(title, 1,
      {
        filter: 'blur(5px)',
        alpha: 0,
        x: -10,
      },
      {
        delay: 0.8,
        filter: 'blur(0)',
        alpha: 1,
        x: 0,
        ease: Expo.easeIn,
      });
    TweenLite.fromTo(contents, 1,
      {
        filter: 'blur(5px)',
        alpha: 0,
        x: -10,
      },
      {
        delay: 1,
        filter: 'blur(0)',
        alpha: 1,
        x: 0,
        ease: Expo.easeIn,
      });

    setTimeout(showForm, 1200);
    setTimeout(selectMotion, 2800);

  },
}

const showForm = () => {
  const fileds = document.querySelectorAll('.field');
  fileds.forEach((filed, index) => {
    TweenLite.fromTo(filed, 1,
      {
        boxShadow: 'rgba(0, 0, 0, 0) 0 1px 3px',
      },
      {
        delay: index / 8,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 3px',
        onComplete: function() {
          const label = filed.querySelector('.form-label');
          TweenLite.fromTo(label, 0.6, {
            alpha: 0,
            x: -10,
          },{
            delay: 0.2,
            alpha: 1,
            x: 0,
            ease: Expo.easeOut,
          });
        },
      });
  });
}

const selectMotion = () => {
  // button
  const submitButton = document.querySelector('.wpcf7-submit');
  TweenLite.fromTo(submitButton, 1.2, {
    backgroundColor: 'white',
    y: 20,
  }, {
    backgroundColor: '#12e8a6',
    y: 0,
    ease: Expo.easeIn,
  });

  const selectLabel = document.querySelector('.form-label');
  const select = document.querySelector('select');
  const selectArrow = document.querySelector('.select-arrow');

  TweenLite.fromTo(selectLabel, 0.3, {
    fontSize: '1.1rem',
    y: 0,
  },{
    fontSize: '0.8rem',
    y: -20,
    ease: Expo.easeIn,
    onComplete: function() {
      TweenLite.fromTo(select, 0.5, {
        y: 20,
        alpha: 0,
      },{
        delay: 0.2,
        y: 0,
        alpha: 1,
        ease: Expo.easeOut,
      });

      TweenLite.fromTo(selectArrow, 0.5, {
        y: 20,
        alpha: 0,
      },{
        delay: 0.2,
        y: 0,
        alpha: 1,
        ease: Expo.easeOut,
      })
    },
  });
}