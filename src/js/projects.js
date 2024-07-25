import Swiper from 'swiper';
import 'swiper/css';
import svg from '../images/svg/icons.svg';
import image1_mob1x from '../images/projects/image_1_mob@1x.webp';
console.log(image1_mob1x);
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
    link: 'See project',
    imgMob1: image3_mob1x,
    imgMob2: image3_mob2x,
    imgTab1: image3_tab1x,
    imgTab2: image3_tab2x,
  },
];

console.log(projectsList.imgMob1);

const markupEl = document.querySelector('.projects-cards');

function cartMarkupTemplate(arr) {
  return arr
    .map(item => {
      return `<li class="projects-card">
          <div class="projects-card-desc">
            <ul class="projects-card-skills">
              <li><p class="projects-card-skill">${projectsList.skill1}</p></li>
              <li><p class="projects-card-skill">${projectsList.skill2}</p></li>
              <li><p class="projects-card-skill">${projectsList.skill3}</p></li>
              <li><p class="projects-card-skill">${projectsList.skill4}</p></li>
            </ul>
            <p class="projects-card-title">
              ${projectsList.title}
            </p>
            <a
              class="projects-card-link"
              href="https://github.com/koleso8/js2team_proj"
              >${projectsList.link}</a
            >
          </div>
          <div class="projects-card-image">
           <picture>
            <source
                 media="(min-width: 1440px)"
                srcset="
                ${projectsList.imgTab1} 1x,
                ${projectsList.imgTab2} 2x
                "
                type="image/webp"
            />
            <source
                media="(min-width: 768px)"
                srcset="
                ${projectsList.imgTab1} 1x,
                ${projectsList.imgTab2} 2x
                "
                type="image/webp"
            />
            <source
                media="(max-width: 767px)"
                srcset="
                ${projectsList.imgMob1} 1x,
                ${projectsList.imgMob2} 2x
                "
                type="image/webp"
            />
            <img
                src="${projectsList.imgMob1}"
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

function renderProjectCart(arr) {
  const markup = cartMarkupTemplate(arr);
  markupEl.innerHTML = markup;
}

renderProjectCart(projectsList);
