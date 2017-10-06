$(document).ready(function() {

  var $text;

  $('.transform').on('click', function(event) {
    event.preventDefault();
    $(this).hide();
    $('.area').addClass('active');
  });

  $('.button-box').on('click', function() {
    $(this).closest('.box').find('.area').removeClass('active');
    $('.transform').show();
    $text = $('.area').val();
    $('.transform').html($text);


    // $('.area').removeClass('active');
    // $('.transform').addClass('active');

  });

});
