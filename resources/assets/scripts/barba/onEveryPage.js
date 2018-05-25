export default function(currentStatus, oldStatus, barbaContainer, newPageRawHTML) {
  // if ( Barba.HistoryManager.history.length === 1 ) {  // ファーストビュー
  //   return; // この時に更新は必要ありません
  // }

  // jquery-pjaxから借りた
  const $newPageHead = $( '<head />' ).html(
    $.parseHTML(
      newPageRawHTML.match( /<head[^>]*>([\s\S.]*)<\/head>/i )[ 0 ],
      document,
      true
    )
  );
  // 変更したいタグ(ご自身の環境に合わせて適宜変更してください)
  const headTags = [
    "link[rel='canonical']",
    "link[rel='shortlink']",
    "link[rel='alternate']",
    "meta[name='description']",
    "meta[property^='og']",
    "meta[name^='twitter']",
    "meta[name='robots']",
  ].join( ',' );
  $('head').find(headTags).remove(); // タグを削除する
  $newPageHead.find(headTags).appendTo('head'); // タグを追加する

  // Analyticsにヒットを送信(Google Analyticsを導入している場合) TODO: attach google analitics
  // if (typeof ga === 'function') {
  //   ga('send', 'pageview', location.pathname);
  // }
}