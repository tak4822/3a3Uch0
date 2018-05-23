export default function() {
  $('.expandButton').on('click', function() {
    $(this).siblings('.detail-container').css('display', 'block');
    $(this).fadeOut(100);
  })
}