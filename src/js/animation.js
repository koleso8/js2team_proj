document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});

//*===========================================================

let blocks = document.querySelectorAll('.section-animation');

function checkBlocksVisibility() {
  let windowHeight = window.innerHeight;

  blocks.forEach(block => {
    let blockPosition = block.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 100) {
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }
  });
}

checkBlocksVisibility();

window.addEventListener('scroll', checkBlocksVisibility);
