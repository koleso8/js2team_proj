import image1_2x from '../images/covers/1@2х.webp';
import image1 from '../images/covers/1_1x.webp';

import image2_2x from '../images/covers/4@2х.webp';
import image2 from '../images/covers/4_1x.webp';

import image3_2x from '../images/covers/5@2х.webp';
import image3 from '../images/covers/5_1x.webp';

import image4_2x from '../images/covers/6@2х.webp';
import image4 from '../images/covers/6_1x.webp';

import image5_2x from '../images/covers/7@2х.webp';
import image5 from '../images/covers/7_1x.webp';

import image6_2x from '../images/covers/8@2х.webp';
import image6 from '../images/covers/8_1x.webp';

import image7_2x from '../images/covers/9@2х.webp';
import image7 from '../images/covers/9_1x.webp';

import image8_2x from '../images/covers/10@2х.webp';
import image8 from '../images/covers/10_1x.webp';

import image9_2x from '../images/covers/11@2х.webp';
import image9 from '../images/covers/11_1x.webp';

import image10_2x from '../images/covers/12@2х.webp';
import image10 from '../images/covers/12_1x.webp';

let coversList = [
  image1,
  image1_2x,

  image2,
  image2_2x,

  image3,
  image3_2x,

  image4,
  image4_2x,

  image5,
  image5_2x,

  image6,
  image6_2x,

  image7,
  image7_2x,

  image8,
  image8_2x,

  image9,
  image9_2x,

  image10,
  image10_2x,
];

function lineMarkupTemplate(arr) {
    return `
       <div class="marquee">
        <ul class="marquee__inner">
        <li class="marquee__line animate line1">
        <div class="marquee_picture">
     <picture>
     <source media="(min-width: 1440px)" srcset="
                                    ${arr[0]} 1x,
                                    ${arr[1]} 2x" />
    <source media="(min-width: 768px)" srcset=" 
                                    ${arr[0]} 1x,
                                    ${arr[1]} 2x" />
     <source media="(max-width: 767px)" srcset="
                                    ${arr[0]} 1x,
                                    ${arr[1]} 2x" />
      <img class="project-pic" src="
      ${arr[0]}" alt="website" width="282" height="162" loading="lazy"/> </picture> </div> </li>
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[2]} 1x,
                                    ${arr[3]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[2]} 1x,
                                    ${arr[3]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[2]} 1x,
                                    ${arr[3]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[2]}" alt="website" width="282"
                                    height="162" loading="lazy" />
                                </picture>
                            </div> </li>

                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[4]} 1x,
                                    ${arr[5]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[4]} 1x,
                                    ${arr[5]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[4]} 1x,
                                    ${arr[5]} 2x"/>
                                    <img class="project-pic" src="
                                    ${arr[4]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div> </li></ul>

                    <ul class="marquee__inner">
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[6]} 1x,
                                    ${arr[7]} 2x" />
                        <source media="(min-width: 768px)" srcset="
                        ${arr[6]} 1x,
                        ${arr[7]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[6]} 1x,
                                    ${arr[7]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[6]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[8]} 1x,
                                     ${arr[9]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[8]} 1x,
                                    ${arr[9]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[8]} 1x,
                                    ${arr[9]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[8]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[10]} 1x,
                                     ${arr[11]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[10]} 1x,
                                    ${arr[11]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[10]} 1x,
                                    ${arr[11]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[10]}" alt="website" width="282"
                                        height="162" loading="lazy"  />
                                </picture></div> </li>
                        <li class="marquee__line animate line2">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[12]} 1x,
                                    ${arr[13]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[12]} 1x,
                                     ${arr[13]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[12]} 1x,
                                    ${arr[13]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[12]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture></div></li></ul>
                    <ul class="marquee__inner">
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[14]} 1x,
                                    ${arr[15]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[14]} 1x,
                                     ${arr[15]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[14]} 1x,
                                     ${arr[15]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[14]}" alt="website" width="282"
                                    height="162" loading="lazy" />
                                </picture> </div> </li>
                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[16]} 1x,
                                    ${arr[17]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[16]} 1x,
                                    ${arr[17]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[16]} 1x,
                                    ${arr[17]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[16]}" alt="website" width="282"
                                        height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>

                        <li class="marquee__line animate line1">
                            <div class="marquee_picture">
                                <picture>
                                    <source media="(min-width: 1440px)" srcset="
                                    ${arr[18]} 1x,
                                     ${arr[19]} 2x" />
                                    <source media="(min-width: 768px)" srcset="
                                    ${arr[18]} 1x,
                                     ${arr[19]} 2x" />
                                    <source media="(max-width: 767px)" srcset="
                                    ${arr[18]} 1x,
                                    ${arr[19]} 2x" />
                                    <img class="project-pic" src="
                                    ${arr[18]}" alt="website" width="282"
                                     height="162" loading="lazy" />
                                </picture>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`;
  };

//  .join('');
// function renderCoversLine(arr) {
//   const markup = lineMarkupTemplate(arr);
//   document.querySelector('.background-circle3').innerHTML = markup;
// }

document.querySelector('.background-circle3').innerHTML =
  lineMarkupTemplate(coversList);

// renderCoversLine(coversList);

// const coversSection = document.querySelector('.covers');
// const line = document.querySelectorAll('.marquee__line');

// function onEntry(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       line.forEach(line => line.classList.add('animate'));
//     } else {
//       line.forEach(line => line.classList.remove('animate'));
//     }
//   });
// }

// let options = {
//   threshold: 0,
// };

// let observer = new IntersectionObserver(onEntry, options);
// observer.observe(coversSection);
