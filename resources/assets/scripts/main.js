import 'jquery';

import firstTransition from './modules/firstTransition';
firstTransition();

import barbaInit from './barba/init';
import frontPage from './views/frontPage';
import products from './views/products';
import about from './views/about';
import career from './views/career';
import contact from './views/contact';

import common from './common';

const views = [
  frontPage,
  products,
  about,
  career,
  contact,
];

// Load Events
jQuery(document).ready(() => {
  common();
});

// 最初のページローディングのスピードはこっちで調節
// ページ間でのトランジションはBarba.jsで調節
$(window).on('load', function() {
  barbaInit(views);
})

