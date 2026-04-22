const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const sliderButton = document.querySelector('.slider-button');

let currentIndex = 1; // старт з 3-го слайда

function updateButtonText() {
  if (currentIndex <= 2) {
    sliderButton.textContent = 'Splits Results';
  } else if (currentIndex <= 5) {
    sliderButton.textContent = 'Mobility Progress';
  } else if (currentIndex <= 8) {
    sliderButton.textContent = 'Back Mobility';
  } else{
    sliderButton.textContent = 'Combo programs';
  }
}

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');

    if (index === currentIndex) {
      slide.classList.add('active');
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if (index === (currentIndex + 1) % slides.length) {
      slide.classList.add('next');
    }
  });

  updateButtonText(); // ← оновлюємо текст кнопки
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

// ініціалізація
updateSlider();
