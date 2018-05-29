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
        ease: Expo.easeOut,
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
        ease: Expo.easeOut,
      });

    setTimeout(showCard, 1000);
  },
}

const showCard = () => {
  const cards = document.querySelectorAll('.careerCard-container');
  cards.forEach((card, index) => {
    TweenLite.fromTo(card, 0.8, {
      boxShadow: 'rgba(0, 0, 0, 0) 0 1px 3px',
    }, {
      delay: index / 2,
      boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 3px',
      onStart: function() {
        const positionDeco = card.querySelector('.deco');
        const positionText = card.querySelector('.position');
        const leadText = card.querySelector('.leadDesc');
        const expandButton = card.querySelector('.expandButton');

        TweenLite.fromTo(positionDeco, 1, {
          height: 0,
        },{
          height: '100%',
          ease: Expo.easeInOut,
        });

        TweenLite.fromTo(positionText, 0.6, {
          alpha: 0,
          filter: 'blur(5px)',
          x: -20,
        },{
          delay: 0.6,
          filter: 'blur(0px)',
          alpha: 1,
          x: 0,
          ease: Expo.easeOut,
        });

        TweenLite.fromTo(leadText, 0.7, {
          alpha: 0,
          y: -10,
        },{
          delay: 0.7,
          alpha: 1,
          y: 0,
          ease: Expo.easeOut,
        });

        TweenLite.fromTo(expandButton, 0.8, {
          alpha: 0,
          y: -10,
        },{
          delay: 0.8,
          alpha: 1,
          y: 0,
          ease: Expo.easeOut,
        });
      },
    })
  })
}