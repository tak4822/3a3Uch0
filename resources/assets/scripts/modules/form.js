export default function() {
  $('.wpcf7-form-control').on('focus', function() {
    console.log('heyy');
    const $field = $(this).closest('.field');
    if(!$field.hasClass('type')) {
      $field.find('.form-label').css({
        'font-size': '0.9rem',
        'top': '-7px',
      })
    }
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
