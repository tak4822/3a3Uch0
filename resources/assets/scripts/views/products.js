import { displacementSlider } from "../modules/slider";
import slideToDetail from '../modules/sliderToDetail';

export default {
  namespace: 'products',
  onEnter: function() {
    console.log('products');
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。
    // eslint-disable-next-line no-undef
    const data = products_data;
    console.log('datat', data);
    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
      data,
      parent: el,
      images: imgs,
      disp: require('../../images/displacement.jpg'),
    });

    slideToDetail(data);


  },
  onLeave: function() {
    // 次のページへのトランジションが始まった時。
  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}