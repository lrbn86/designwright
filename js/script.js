$('.menu-btn').click(() => {
  $('.nav-container').fadeIn();
  $('body').toggleClass('noscroll');
});

$('.close-menu-btn').click(() => {
  $('.nav-container').fadeOut();
})

$('.nav-container').click(() => {
  $('.nav-container').fadeOut();
});