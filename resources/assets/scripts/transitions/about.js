import { TweenLite, Expo } from 'gsap/TweenMax';
import showSectionTitles from '../modules/showSectionTitle';

export default {
  in() {
    // show svg without image
    const members = document.querySelectorAll('.member-wrapper');
    if (window.matchMedia('(min-width: 550px)').matches) {
      members.forEach((member, index) => showMember(member, index));
    } else {
      showMember(members[0], 0);
      showMember(members[1], 1);
    }
  },
  scroll() {
    // sections Title
    const sectionTitles = document.querySelectorAll('.sectionTitle-container');
    const memberTitle = sectionTitles[0];
    showSectionTitles(memberTitle);

    const newsPos = document.querySelector('.news-container').offsetTop;
    const companyPos = document.querySelector('.companyInfo-container')
      .offsetTop;
    const windowHeight = document.documentElement.clientHeight;
    const members = document.querySelectorAll('.member-wrapper');

    let newHasBeenOpened = false;
    let companyInfoHasBeenOpened = false;

    $(window).scroll(function() {
      const scrollPos = $(window).scrollTop();

      members.forEach(el => {
        if (el.offsetTop < scrollPos + windowHeight + 200) {
          showMember(el, 0);
        }
      });

      if (scrollPos + windowHeight > newsPos && !newHasBeenOpened) {
        newHasBeenOpened = true;
        const newsTitle = sectionTitles[1];
        showSectionTitles(newsTitle);
        news();
      }

      if (
        scrollPos + windowHeight > companyPos + 50 &&
        !companyInfoHasBeenOpened
      ) {
        companyInfoHasBeenOpened = true;
        const companyInfoTitle = sectionTitles[2];
        showSectionTitles(companyInfoTitle);
        setTimeout(() => {
          companyInfo();
        });
      }
    });
  },
};

const news = () => {
  const newsContainer = document.querySelector('.news-box');
  const news = document.querySelectorAll('.news-wrapper');
  TweenLite.fromTo(
    newsContainer,
    1,
    {
      height: 0,
      padding: 0,
    },
    {
      padding: 10,
      height: 450,
      ease: Expo.easeInOut,
      onComplete: function() {
        news.forEach((el, index) => {
          TweenLite.fromTo(
            el,
            2,
            {
              y: 400,
              alpha: 0,
            },
            {
              delay: index / 8,
              y: 0,
              alpha: 1,
              ease: Expo.easeOut,
            });
        });
      },
    });
};

const showedMember = [];

const showMember = (el, index) => {
  if (showedMember.includes(el)) return false;
  showedMember.push(el);
  const memberPic = el.querySelector('.member-pic');
  const memberPicImage = el.querySelector('.clipped-img img');
  const memberPosition = el.querySelector('.member-position');
  const memberName = el.querySelector('.member-name');

  TweenLite.fromTo(
    memberPicImage,
    1.2,
    {
      filter: 'blur(20px)',
      alpha: 0,
      y: -200,
      rotation: -90,
    },
    {
      delay: index / 5,
      filter: 'blur(0)',
      alpha: 1,
      y: 0,
      transformOrigin: '0% 100%',
      rotation: 0,
      ease: Expo.easeOut,
      onStart: function() {
        TweenLite.fromTo(
          memberPosition,
          1,
          {
            filter: 'blur(5px)',
            alpha: 0,
            x: -20,
          },
          {
            delay: 0.8,
            filter: 'blur(0)',
            alpha: 1,
            x: 0,
            ease: Expo.easeOut,
          });
        TweenLite.fromTo(
          memberName,
          1,
          {
            filter: 'blur(5px)',
            alpha: 0,
            x: -20,
          },
          {
            delay: 1,
            filter: 'blur(0)',
            alpha: 1,
            x: 0,
            ease: Expo.easeOut,
          });
      },
      onComplete: function() {
        TweenLite.fromTo(memberPic, 1.4,
          {
            filter: 'drop-shadow(rgba(0, 0, 0, 0) 1px 1px 10px)',
          },
          {
            delay: 0.2,
            filter: 'drop-shadow(rgba(0, 0, 0, 0.2) 1px 1px 10px)',
            ease: Expo.easeIn,
          });
      },
    });
  // show text
};

const companyInfo = () => {
  const infoRows = document.querySelectorAll('.info-row');
  infoRows.forEach((row, index) => {
    TweenLite.fromTo(row, 0.6,
      {
        alpha: 0,
        rotation: 10,
        y: 20,
      },
      {
        delay: index / 8,
        alpha: 1,
        rotation: 0,
        y: 0,
        ease: Expo.easeOut,
      });
  });
};
