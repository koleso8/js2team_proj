import Swiper from 'swiper';
import 'swiper.min.css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { getReviews } from './API_reviews'

const reviewsList = document.querySelector('.reviews-list');


async function getReviews() {
    try {
        const reviews = await getReviews();
        renderReviews(reviews); 
    } catch (error) {
        throw new Error('Not found');
    }
        
}
getReviews();



function renderReviews(reviews) {
    const markup = reviews.map(review => {
        return `<li class="reviews-item swiper-slide">
          <img src="${review.avatar_url}" alt="${review.author}" />
          <h3>${review.author}</h3>
          <p>${review.review}</p>
        </li>`
    }).join("");
    
    reviewsList.insertAdjacentHTML('beforeend', markup);
}

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
});







