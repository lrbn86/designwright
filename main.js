const projectGalleryContainer = $(".project-gallery-container");

projectGalleryContainer.animate({scrollLeft: 0}, 1000);

let rolling; 

projectGalleryContainer.on("mouseenter", () => {
  clearInterval(rolling);
})

projectGalleryContainer.on("mouseleave", () => {
  rolling = setInterval(scrollContainer, 1000)
})


function scrollContainer() {
  projectGalleryContainer.animate({scrollLeft: "+=150px"}, 1000)
}

