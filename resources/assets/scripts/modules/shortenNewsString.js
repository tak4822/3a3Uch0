import shortenString from '../util/shortenString'

export default function() {
  document.querySelectorAll('.leadText').forEach((el) => {
    el.innerText = shortenString(el.innerText, 80);
  });
}