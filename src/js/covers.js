const coversSection = document.querySelector('.covers');
const line = document.querySelectorAll('.marquee__line');

function onEntry(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      line.forEach(line => line.classList.add('animate'));
    } else {
      line.forEach(line => line.classList.remove('animate'));
    }
  });
}

let options = {
  threshold: 0,
};

let observer = new IntersectionObserver(onEntry, options);
observer.observe(coversSection);