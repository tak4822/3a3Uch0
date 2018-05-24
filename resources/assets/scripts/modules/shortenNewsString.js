import shortenString from '../util/shortenString'

export default function() {
  if (window.matchMedia('(max-width:900px)').matches) {
    document.querySelectorAll('.leadText').forEach((el) => {
      el.innerText = shortenString(el.innerText, 80);
    });
  } else if (window.matchMedia('(max-width:1600px)').matches) {
    document.querySelectorAll('.leadText').forEach((el) => {
      el.innerText = shortenString(el.innerText, 160);
    });
  }

}