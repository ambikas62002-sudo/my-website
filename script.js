const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.top = "0";   // show header
  } else {
    header.style.top = "-80px"; // hide header
  }
});

const carousel = document.querySelector(".carousel-container");

let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 1;
  carousel.scrollLeft = scrollAmount;

  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  }
}

setInterval(autoScroll, 20);
