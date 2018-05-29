// import transition from '../transitions/news';
// import newsHover from '../modules/news';

export default {
  namespace: 'news',
  onEnter: function() {
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。


    // newsHover();
  },
  onLeave: function() {
    // 次のページへのトランジションが始まった時。
  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}