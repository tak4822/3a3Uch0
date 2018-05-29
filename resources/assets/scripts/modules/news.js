export default function() {
  $(".news-wrapper .leadText").mousemove(function(e){
    console.log('heu');
    const mouse = $(".mouse-container");
    // Add the mouse position to new cursor and followers
    mouse.css({
      left: e.pageX,
      top: e.pageY,
      opacity: 1, // show the cursor only when move mouse
    });
  });

  $(".news-box").mouseout(function () {
    $(".mouse-container").css('opacity', 0);
  })
}
