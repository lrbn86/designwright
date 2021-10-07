// Handle mobile navigation interaction
const openMenuBtn = $('#open-menu-btn');
const closeMenuBtn = $('#close-menu-btn');
const navContainer = $('#nav-container');
const tab1Btn = $('#tab1-btn');
const tab2Btn = $('#tab2-btn');
const tab1Content = $('.tab1');
const tab2Content = $('.tab2');

openMenuBtn.click(() => {
  navContainer.show();
  openMenuBtn.hide();
  closeMenuBtn.show();
});

closeMenuBtn.click(() => {
  navContainer.hide();
  closeMenuBtn.hide();
  openMenuBtn.show();
});

// Listen for window resize event
// If we are in desktop view, always show the navigation
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    navContainer.show();
  }
});

// Handle tab switching on work page
tab1Btn.click(() => {
  tab2Btn.removeClass('tab-selected');
  tab1Btn.addClass('tab-selected');
  tab1Content.show();
  tab2Content.hide();
});

tab2Btn.click(() => {
  tab1Btn.removeClass('tab-selected');
  tab2Btn.addClass('tab-selected');
  tab2Content.show();
  tab1Content.hide();
});
