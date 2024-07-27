import Swiper from 'swiper';
import 'swiper/css';
import { projectsImages } from './images';

const projectsList = [
  {
    skill1: '&num;react',
    skill2: '&num;js',
    skill3: '&num;node js',
    skill4: '&num;git',
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    href: 'https://github.com/koleso8/js2team_proj',
    link: 'See project',
    imgMob1: projectsImages.project1_mob1x,
    imgMob2: projectsImages.project1_mob2x,
    imgTab1: projectsImages.project1_tab1x,
    imgTab2: projectsImages.project1_tab2x,
  },
  {
    skill1: '&num;react',
    skill2: '&num;js',
    skill3: '&num;node js',
    skill4: '&num;git',
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    href: 'https://github.com/koleso8/js2team_proj',
    link: 'See project',
    imgMob1: projectsImages.project2_mob1x,
    imgMob2: projectsImages.project2_mob2x,
    imgTab1: projectsImages.project2_tab1x,
    imgTab2: projectsImages.project2_tab2x,
  },
  {
    skill1: '&num;react',
    skill2: '&num;js',
    skill3: '&num;node js',
    skill4: '&num;git',
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    href: 'https://github.com/koleso8/js2team_proj',
    link: 'See project',
    imgMob1: projectsImages.project3_mob1x,
    imgMob2: projectsImages.project3_mob2x,
    imgTab1: projectsImages.project3_tab1x,
    imgTab2: projectsImages.project3_tab2x,
  },
];

const markupEl = document.querySelector('.projects-cards');
const navBtnPrevEL = document.querySelector('.swiper-button-prev');
const navBtnNextEl = document.querySelector('.swiper-button-next');
const arrowPrevEl = document.querySelector('.icon-prev');
const arrowNextEl = document.querySelector('.icon-next');

function cardMarkupTemplate(arr) {
  return arr
    .map(item => {
      return `<li class="projects-card swiper-slide">
          <div class="projects-card-desc">
            <ul class="projects-card-skills">
              <li><p class="projects-card-skill">${item.skill1}</p></li>
              <li><p class="projects-card-skill">${item.skill2}</p></li>
              <li><p class="projects-card-skill">${item.skill3}</p></li>
              <li><p class="projects-card-skill">${item.skill4}</p></li>
            </ul>
            <p class="projects-card-title">
              ${item.title}
            </p>
            <a
              class="projects-card-link"
              target="_blank"
              href="${item.href}"
              >${item.link}</a
            >
          </div>
          <div class="projects-card-image">
           <picture>
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
                loading="lazy"
            />
            </picture>
          </div>
        </li>`;
    })
    .join('');
}

function renderProjectCards(arr) {
  const markup = cardMarkupTemplate(arr);
  markupEl.innerHTML = markup;
}

renderProjectCards(projectsList);

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
  });

  function updateNavigationButtons() {
    if (swiper.isBeginning) {
      navBtnPrevEL.classList.add('disabled');
      arrowPrevEl.classList.add('disabled');
    } else {
      navBtnPrevEL.classList.remove('disabled');
      arrowPrevEl.classList.remove('disabled');
    }

    if (swiper.isEnd) {
      navBtnNextEl.classList.add('disabled');
      arrowNextEl.classList.add('disabled');
    } else {
      navBtnNextEl.classList.remove('disabled');
      arrowNextEl.classList.remove('disabled');
    }
  }

  navBtnNextEl.addEventListener('click', () => {
    swiper.slideNext(1000);
  });

  navBtnPrevEL.addEventListener('click', () => {
    swiper.slidePrev(1000);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
      swiper.slideNext(1000);
    } else if (event.key === 'ArrowLeft') {
      swiper.slidePrev(1000);
    } else if (event.key === 'Tab') {
      event.preventDefault();
      if (event.shiftKey) {
        swiper.slidePrev(1000);
      } else {
        swiper.slideNext(1000);
      }
    }
  });
  swiper.on('slideChange', updateNavigationButtons);
  updateNavigationButtons();
});
