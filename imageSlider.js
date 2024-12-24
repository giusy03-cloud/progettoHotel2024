// src/assets/imageSlider.js
window.onload = function() {
  let currentIndex = 0;
  const images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];

  const sliderImage = document.getElementById("slider-image");

  function changeImage() {
    if (sliderImage) {
      sliderImage.style.opacity = 0;

      setTimeout(function() {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1;
      }, 300);
    }
  }

  setInterval(changeImage, 2000);
}
