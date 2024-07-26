import Accordion from 'accordion-js';
import svg from '../images/svg/icons.svg';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Navigation, Keyboard, Mousewheel]);

const refs = {
  accordionContainerEl: document.querySelector('.about-me-accordion-container'),
  swiperWrapperEl: document.querySelector('.swiper-wrapper'),
};

const aboutMeFacts = [
  {
    title: 'About me',
    textFirst:
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
    textSecond:
      'Able to work both independently and in a team.I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions.Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work.I am always looking for opportunities for self - improvement.I actively study new technologies and practices to stay abreast of the latest innovations.I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
  },

  {
    title: 'Role',
    textFirst: 'Frontend development',
    textSecond: 'HeadlessCMS, Wordpress',
    textThird: 'Blender(enjoy)',
  },

  {
    title: 'Education',
    textFirst:
      '2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York ',
    textSecond:
      '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
    textThird: '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
  },
];

const skills = [
  'HTML / CSS',
  'JavaScript',
  'React',
  'Node. js',
  'React Native',
  'Soft skills',
  'Python',
];

function factsAboutMeTemplate(array) {
  return array
    .map(item => {
      return `
  <li class="ac" id="about-ac">
    <h3 class="ac-header" id="about-ac-header">
      <button type="button" class="ac-trigger" id="about-ac-trigger">
      ${item.title}
       <span class="about-circle"><svg class="about-ac-icon" width="10" height="5">
                <use href="${svg}#arrowDown"></use>
              </svg>
              </span>
      </button>
    </h3>
    <div class="ac-panel" id="about-ac-panel">
      <p class="ac-text" id="about-ac-text">${item.textFirst}</p>
       <p class="ac-text" id="about-ac-text">${item.textSecond}</p>
       <p class="ac-text" id="about-ac-text">${item.textThird || ''}</p>
    </div>
  </li>`;
    })
    .join('');
}

function renderAboutMeFacts() {
  const markup = factsAboutMeTemplate(aboutMeFacts);
  refs.accordionContainerEl.innerHTML = markup;
}

renderAboutMeFacts();

new Accordion('.about-me-accordion-container', { openOnInit: [0] });

function skillsTemplate(array) {
  return array
    .map(item => {
      return `
    <div class="swiper-slide">${item}</div>
        `;
    })
    .join('');
}

function renderSkills() {
  const markup = skillsTemplate(skills);
  refs.swiperWrapperEl.innerHTML = markup;
}

renderSkills();

const skillSwiper = new Swiper('.about-skills-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.about-swiper-button-next',
    grabCursor: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 2,
      width: 260,
    },

    768: {
      slidesPerView: 3,
      width: 600,
    },

    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },

  loop: true,
  setWrapperSize: true,
  spaceBetween: 0,
  speed: 600,
  simulateTouch: false,
  slideToClickedSlide: true,
  slidesPerGroup: 1,
});

console.log(skillSwiper);

function updateHighlightClass() {
  const slides = skillSwiper.slides;
  slides.forEach(slide => slide.classList.remove('is-first'));
  const firstVisibleSlide = slides[skillSwiper.activeIndex];
  firstVisibleSlide.classList.add('is-first');
}

skillSwiper.on('slideChange', updateHighlightClass);
skillSwiper.on('slideChangeTransitionEnd', updateHighlightClass);

updateHighlightClass();
