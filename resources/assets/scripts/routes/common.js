import shortenNewsString from '../modules/shortenNewsString';
import careerCard from '../modules/careerCard';

export default {
  init() {
    shortenNewsString();
    careerCard();
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
