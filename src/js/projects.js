import Swiper from 'swiper';
import 'swiper/css';

import image1_mob1x from '../images/projects/image_1_mob@1x.webp';
import image1_mob2x from '../images/projects/image_1_mob@2x.webp';
import image1_tab1x from '../images/projects/image_1_tab_desk@1x.webp';
import image1_tab2x from '../images/projects/image_1_tab_desk@2x.webp';
import image2_mob1x from '../images/projects/image_2_mob@1x.webp';
import image2_mob2x from '../images/projects/image_2_mob@2x.webp';
import image2_tab1x from '../images/projects/image_2_tab_desk@1x.webp';
import image2_tab2x from '../images/projects/image_2_tab_desk@2x.webp';
import image3_mob1x from '../images/projects/image_3_mob@1x.webp';
import image3_mob2x from '../images/projects/image_3_mob@2x.webp';
import image3_tab1x from '../images/projects/image_3_tab_desk@1x.webp';
import image3_tab2x from '../images/projects/image_3_tab_desk@2x.webp';

const projectsList = [
  {
    skill1: '&num;react',
    skill2: '&num;js',
    skill3: '&num;node js',
    skill4: '&num;git',
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    href: 'https://github.com/koleso8/js2team_proj',
    link: 'See project',
    imgMob1: image1_mob1x,
    imgMob2: image1_mob2x,
    imgTab1: image1_tab1x,
    imgTab2: image1_tab2x,
  },
  {
    skill1: '&num;react',
    skill2: '&num;js',
    skill3: '&num;node js',
    skill4: '&num;git',
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    href: 'https://github.com/koleso8/js2team_proj',
    link: 'See project',
    imgMob1: image2_mob1x,
    imgMob2: image2_mob2x,
    imgTab1: image2_tab1x,
    imgTab2: image2_tab2x,
  },
  {
    skill1: '&num;react',
    skill2: '&num;js',
    skill3: '&num;node js',
    skill4: '&num;git',
    title: 'Programming Across Borders: Ideas, Technologies, Innovations',
    href: 'https://github.com/koleso8/js2team_proj',
    link: 'See project',
    imgMob1: image3_mob1x,
    imgMob2: image3_mob2x,
    imgTab1: image3_tab1x,
    imgTab2: image3_tab2x,
  },
];

const markupEl = document.querySelector('.projects-cards');
const navBtnPrev = document.querySelector('.swiper-button-prev');
const navBtnNext = document.querySelector('.swiper-button-next');
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
  });

  function updateNavigationButtons() {
    if (swiper.isBeginning) {
      navBtnPrev.classList.add('disabled');
      arrowPrevEl.classList.add('disabled');
    } else {
      navBtnPrev.classList.remove('disabled');
      arrowPrevEl.classList.remove('disabled');
    }

    if (swiper.isEnd) {
      navBtnNext.classList.add('disabled');
      arrowNextEl.classList.add('disabled');
    } else {
      navBtnNext.classList.remove('disabled');
      arrowNextEl.classList.remove('disabled');
    }
  }

  navBtnNext.addEventListener('click', () => {
    swiper.slideNext(1000);
  });

  navBtnPrev.addEventListener('click', () => {
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
