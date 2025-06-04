    const selector = document.getElementById("selector");

    selector.addEventListener("change", () => {
      const seleccion = selector.value;
      if (seleccion=="cat") {
        location.href="cat_index.html"   
      }else if (seleccion=="eng") {
        location.href="eng_index.html"
      }else{
        location.href="index.html"
      }
    });

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.getElementById('mainNav');
    const navUl = mainNav.querySelector('ul');
    const main = document.getElementById('main');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');

        // Añade o quita desplazamiento al main
        main.classList.toggle('shifted', mainNav.classList.contains('active'));
    });

    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            main.classList.remove('shifted');
        });
    });
});



  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.slider-dots');

  let current = 0;
  let slideInterval;

  function createDots() {
    slides.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));

    slides[current].classList.add('active');
    document.querySelectorAll('.dot')[current].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function goToSlide(index) {
    current = index;
    updateSlider();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  createDots();
  startAutoSlide();

