import frontPageScroll from '../modules/frontPageScroll';
import frontTransitions from '../transitions/frontPage';

export default {
  namespace: 'frontpage',
  onEnter: function() {
    console.log('front page');
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。
    frontPageScroll();
    frontTransitions();

  },
  onLeave: function() {
    // 次のページへのトランジションが始まった時。
  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}