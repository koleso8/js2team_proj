import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { getReviews } from './API_reviews'

const reviewsList = document.querySelector('.reviews-list');


async function makeReviews() {
    try {
        const reviews = await getReviews();
        renderReviews(reviews); 
    } catch (error) {
        throw new Error('Not found');
    }
        
}
makeReviews();



function renderReviews(reviews) {
    const markup = reviews.map(review => {
        return `<li class="reviews-item swiper-slide">
          <img src="${review.avatar_url}" alt="${review.author}"/>
          <h3>${review.author}</h3>
          <p>${review.review}</p>
        </li>`
    }).join("");
    
    reviewsList.insertAdjacentHTML('beforeend', markup);
}

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
      spaceBetween: 16
    },
    
    1440: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  }

});






