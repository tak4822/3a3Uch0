import shortenNewsString from '../modules/shortenNewsString';

export default {
  init() {
    shortenNewsString();
    // JavaScript to be fired on all pages
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
