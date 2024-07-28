import { createRequest } from "./API_reviews";
import {success} from "./modal"

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.comments');
const firstInput = document.querySelector('.email');


formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = formEl.elements.email.value.trim();
    const commentsInput = formEl.elements.comments.value.trim();

    const request = {
    email: emailInput,
    comment: commentsInput 

    }

    await createRequest(request);
    success();

    formEl.reset();

})

inputEl.addEventListener('input', () => {
    const comment = inputEl.value.slice(0, 150).replace("...", "");
    if (comment.length >= 150) {
        inputEl.value = comment + "...";
     }
})

firstInput.addEventListener('input', () => {
    const email = firstInput.value;
    if (email.validity.valid) {
        email.classList.add('valid');
        email.classList.remove('invalid');
    } else {
        email.classList.add('invalid');
        email.classList.remove('valid');
    }
})