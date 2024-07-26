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


/*  <picture>
            <source
                 media="(min-width: 1440px)"
                srcset="
                ${item.imgTab1} 1x,
                ${item.imgTab2} 2x
                "
                type="image/webp"
            />
            <source
                media="(min-width: 768px)"
                srcset="
                ${item.imgTab1} 1x,
                ${item.imgTab2} 2x
                "
                type="image/webp"
            />
            <source
                media="(max-width: 767px)"
                srcset="
                ${item.imgMob1} 1x,
                ${item.imgMob2} 2x
                "
                type="image/webp"
            />
            <img
                src="${item.imgMob1}"
                alt="project"
                width="311"
                height="195"
                class="projects-card-img"
            />
            </picture> */