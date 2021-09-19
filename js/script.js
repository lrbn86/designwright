$('.menu-btn').click(() => {
  $('.nav-container').fadeIn();
  $('body').toggleClass('noscroll');
});

$('.close-menu-btn').click(() => {
  $('.nav-container').fadeOut();
  $('body').removeClass('noscroll');
})

$('.nav-container').click(() => {
  $('.nav-container').fadeOut();
});