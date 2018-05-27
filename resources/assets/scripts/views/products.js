import { displacementSlider } from "../modules/slider";
import slideToDetail from '../modules/sliderToDetail';
import transition from '../transitions/products';

export default {
  namespace: 'products',
  onEnter: function() {
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。
    // eslint-disable-next-line no-undef
    const data = products_data;
    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
      data,
      parent: el,
      images: imgs,
      disp: require('../../images/14.jpg'),
    });

    if(window.matchMedia('(max-width:1024px)').matches) {
      transition.mobileIn();
    } else {
      transition.desktopIn();
    }
    slideToDetail(data);
  },
  onLeave: function() {

  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}