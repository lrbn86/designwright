// Handle mobile navigation interaction
const openMenuBtn = $('#open-menu-btn');
const closeMenuBtn = $('#close-menu-btn');
const navContainer = $('#nav-container');

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
