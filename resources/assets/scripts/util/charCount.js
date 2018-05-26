export default function(str) {
  let len = 0;
  str = escape(str);
  for (let i=0; i<str.length; i++, len++) {
    if (str.charAt(i) == "%") {
      if (str.charAt(++i) == "u") {
        i += 3;
        len++;
      }
      i++;
    }
  }
  return len;
}