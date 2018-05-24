export default function() {
  const windowHeight =  $(window).height();
  let isScrolled = false;
  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    e.preventDefault();

    if(scroll > 10 && !isScrolled) {
      transionToSecondView();
      isScrolled = true;
    }
  });

  const transionToSecondView = () => {
    console.log('do');
    window.scroll({
      top: windowHeight,
      left: 0,
      behavior: 'smooth',
    });

  }
}