import transition from '../transitions/about';

export default {
  namespace: 'about',
  onEnter: function() {
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。
    transition.in();
    transition.scroll();
  },
  onLeave: function() {
    // 次のページへのトランジションが始まった時。
  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}