const wrapper = $(".wrapper");
wrapper.hide();
const hero = $(".hero").children();
hero.hide();
const nav = $(".nav");

wrapper.slideDown(800).promise().done(() => {
  hero.each(function(index) {
    $(this).slideDown(800);
  }).promise().done(function() {
    nav.animate({"right": "5rem"});
  });
});


