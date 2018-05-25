import form from '../modules/form'

export default {
  namespace: 'contact',
  onEnter: function() {
    console.log('contact');
    // このページのcontainerが読み込みを開始した時。
  },
  onEnterCompleted: function() {
    // このページのトランジションが完了した時。
    form();


  },
  onLeave: function() {
    // 次のページへのトランジションが始まった時。
  },
  onLeaveCompleted: function() {
    // このページのcontainerが完全に削除された時。
  },
}