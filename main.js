const wrapper = $(".wrapper");
const elems = wrapper.children();
const callToAction = $(".call-to-action")
callToAction.hide();

const heroSectionContent = $('.hero-section-content').children();
heroSectionContent.hide();

$(heroSectionContent).each(function(index) {
  $(this).delay(100*index).slideDown();
}).promise().done(() => {
  callToAction.fadeIn();
})
