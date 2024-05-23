const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 10000;

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides.clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function resetTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextImage, intervalTime);
}

slides.addEventListener('click', () => {
  showNextImage();
  resetTimer();
});

let slideInterval = setInterval(showNextImage, intervalTime);

// Adjust slide width on window resize
window.addEventListener('resize', updateSlider);
