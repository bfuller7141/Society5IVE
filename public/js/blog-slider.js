// public/js/blog-slider.js
document.addEventListener('DOMContentLoaded', () => {
  const slider     = document.getElementById('blog-slider');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  if (!slider || !prevButton || !nextButton) return;

  const firstCard = slider.querySelector('li');
  const gap       = parseFloat(getComputedStyle(slider).gap) || 0;
  const cardWidth = firstCard
    ? firstCard.getBoundingClientRect().width + gap
    : 0;

  prevButton.addEventListener('click', () =>
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' })
  );
  nextButton.addEventListener('click', () =>
    slider.scrollBy({ left:  cardWidth, behavior: 'smooth' })
  );

  let startX      = null;
  let scrollStart = null;

  slider.addEventListener('touchstart', (e) => {
    startX      = e.touches[0].clientX;
    scrollStart = slider.scrollLeft;
  }, { passive: true });

  slider.addEventListener('touchmove', (e) => {
    if (startX === null) return;
    const distance = startX - e.touches[0].clientX;
    slider.scrollLeft = scrollStart + distance;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const distance = startX - e.changedTouches[0].clientX;
    if (Math.abs(distance) > cardWidth / 2) {
      slider.scrollBy({
        left: distance > 0 ?  cardWidth : -cardWidth,
        behavior: 'smooth',
      });
    }
    startX = null;
    scrollStart = null;
  }, { passive: true });
});
