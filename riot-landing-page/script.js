const imgs = document.querySelectorAll(".footer-content__gallery-card");
const gallery = document.querySelector(".footer-content__gallery");
const numberOfImgs = document.querySelectorAll(
  ".footer-content__gallery-card"
).length;
const nextButton = document.querySelector(".btn-right");
const prevButton = document.querySelector(".btn-left");
let imageIndex = 1;
let translateX = 0;

let isDown = false;
let startX;
let scrollLeft;

// Getting the width of images
const imgWidth = imgs[0].getBoundingClientRect().width;

prevButton.addEventListener("click", (e) => {
  if (imageIndex !== 1) {
    imageIndex--;
    translateX += imgWidth;
  }

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = `translateX(${translateX}px)`;
  }
});

nextButton.addEventListener("click", (e) => {
  if (imageIndex !== numberOfImgs) {
    imageIndex++;
    translateX -= imgWidth;
  }
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.transform = `translateX(${translateX}px)`;
  }
});

// slider

gallery.addEventListener("mousedown", (e) => {
  isDown = true;
  gallery.classList.add("active");
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener("mouseleave", () => {
  isDown = false;
  gallery.classList.remove("active");
});

gallery.addEventListener("mouseup", () => {
  isDown = false;
  gallery.classList.remove("active");
});

gallery.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = x - startX;
  gallery.scrollLeft = scrollLeft - walk;
});
