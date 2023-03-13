const carouselSlide = document.querySelector(".carousel-slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const images = document.querySelectorAll(".card");

let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  console.log("working")
});

carouselSlide.addEventListener("transitionend", () => {
  if (images[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if (images[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = images.length - counter;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
});
