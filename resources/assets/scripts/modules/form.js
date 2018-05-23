export default function() {
  $('.field').on('click', function() {
    $(this).find('.form-label').css({
      'font-size': '0.9rem',
      'top': '-8px',
    })
  })

  $('.field').on('keypress', function() {
    const name = $('input[name=your-name]').val();
    const email = $('input[name=your-email]').val();
    const message = $('textarea[name=your-message]').val();

    if(name && email && message) {
      $('.wpcf7-submit').css('opacity', 1);
    }
  })
}
