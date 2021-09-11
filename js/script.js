/*
  If the menu button is clicked, show the navigation. This only occurs in the mobile view.
*/
$('.menu-button').click(() => {
  $('nav').slideToggle();
});