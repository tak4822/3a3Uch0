import shortenNewsString from '../modules/shortenNewsString';
import careerCard from '../modules/careerCard';
import form from '../modules/form';
import slider from '../modules/slider';

export default {
  init() {
    shortenNewsString();
    careerCard();
    form();
    slider();
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
