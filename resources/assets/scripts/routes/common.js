import shortenNewsString from '../modules/shortenNewsString';
import careerCard from '../modules/careerCard';
import form from '../modules/form';

export default {
  init() {
    shortenNewsString();
    careerCard();
    form();
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
