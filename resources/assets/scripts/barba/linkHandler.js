export default function(currentStatus) {
  // link handler

  const link = currentStatus.href;
  const navigation = document.getElementById('navigation');
  const navigationLinks = navigation.querySelectorAll('.menu-item');

  Array.from(navigationLinks, item => {
    if (item.querySelector("a").href === link) {
      item.classList.add('current-menu-item');
    } else {
      if(item.classList.contains('current-menu-item')){
        item.classList.remove('current-menu-item');
      }
    }
  });
}