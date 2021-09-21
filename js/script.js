$('.menu-btn').click(() => {
  $('.nav-container').fadeToggle();
  $('body').addClass('noscroll');
});

$('.close-menu-btn').click(() => {
  $('.nav-container').fadeToggle();
  $('body').removeClass('noscroll');
})
