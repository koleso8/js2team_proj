import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { getReviews } from './API_reviews';

const reviewsList = document.querySelector('.reviews-list');
const prevBtnEl = document.querySelector('.reviews-icon-prev');
const nextBtnEl = document.querySelector('.reviews-icon-next');

// #region scroll
import 'overlayscrollbars/overlayscrollbars.css';
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
} from 'overlayscrollbars';

OverlayScrollbars.plugin(ScrollbarsHidingPlugin);
OverlayScrollbars.plugin(SizeObserverPlugin);
OverlayScrollbars.plugin(ClickScrollPlugin);

const defaultOptions = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [['img', 'load']],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
  overflow: {
    x: 'scroll',
    y: 'scroll',
  },
  scrollbars: {
    theme: 'os-theme-light',
    visibility: 'auto',
    autoHide: 'scroll',
    autoHideDelay: 100,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ['mouse', 'touch', 'pen'],
  },
};
// #endregion scroll

async function makeReviews() {
  try {
    const reviews = await getReviews();
    renderReviews(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

function renderReviews(reviews) {
  const markup = reviews
    .map(review => {
      return `<li class="reviews-item swiper-slide">
          <img src="${review.avatar_url}" alt="${review.author}"/>
          <h3>${review.author}</h3>
          <p>${review.review}</p>
        </li>`;
    })
    .join('');

  reviewsList.insertAdjacentHTML('beforeend', markup);

  const reviewCards = document.querySelectorAll('.reviews-item p');
  reviewCards.forEach(reviewCard => {
    OverlayScrollbars(reviewCard, defaultOptions);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  makeReviews();

  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Scrollbar],
    speed: 500,

    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },

    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },

      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
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
});
