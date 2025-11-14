document.querySelectorAll('.compare').forEach(container => {
  const overlay = container.querySelector('.overlay');
  const slider = container.querySelector('.slider');

  function updateSlider(x) {
    const rect = container.getBoundingClientRect();
    const percent = Math.max(0, Math.min(x / rect.width, 1)) * 100;
    overlay.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    slider.style.left = `${percent}%`;
  }

  container.addEventListener('mousemove', (e) => {
    updateSlider(e.clientX - container.getBoundingClientRect().left);
  });

  container.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    updateSlider(touch.clientX - container.getBoundingClientRect().left);
  });
});



