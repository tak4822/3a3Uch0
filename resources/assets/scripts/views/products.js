
export default {
  namespace: 'products',
  onEnter: function() {
    console.log('products');
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。


  },
  onLeave: function() {
    // 次のページへのトランジションが始まった時。
  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}