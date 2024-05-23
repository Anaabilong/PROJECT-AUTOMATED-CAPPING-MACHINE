function showContent(contentId) {
    // Hide all content
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // Show the selected content
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');
}

// Image Slider Functionality
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

// Carousel JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.carousel').addEventListener('click', showNextImage);

    setInterval(showNextImage, 3000);
});
