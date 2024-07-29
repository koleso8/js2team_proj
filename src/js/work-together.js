import { createRequest } from './API_reviews';
import { createModal } from './modal';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.comments');
const firstInput = document.querySelector('.email');
const emailValidMessage = document.querySelector('.email-validation-message');

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  const emailInput = formEl.elements.email.value.trim();
  const commentsInput = formEl.elements.comments.value.trim();

  const formData = {
    email: emailInput,
    comment: commentsInput,
  };

  try {
    const result = await createRequest(formData);

    if (!result) {
      throw new Error('Server error');
    }
    formEl.reset();
    firstInput.classList.remove('valid', 'invalid');
    emailValidMessage.textContent = '';
    createModal(result);
  } catch (error) {
    showErrorMessage(error);
  }
});

inputEl.addEventListener('input', () => {
  const comment = inputEl.value.slice(0, 150).replace('...', '');
  if (comment.length >= 150) {
    inputEl.value = comment + '...';
  }
});

firstInput.addEventListener('input', () => {
  if (firstInput.validity.valid) {
    firstInput.classList.add('valid');
    firstInput.classList.remove('invalid');
    emailValidMessage.textContent = 'Success!';
  } else if (firstInput.value === '') {
    firstInput.classList.remove('valid', 'invalid');
    emailValidMessage.textContent = '';
  } else {
    firstInput.classList.add('invalid');
    firstInput.classList.remove('valid');
    emailValidMessage.textContent = 'Invalid email, try again';
  }
});

function showErrorMessage(error) {
  return iziToast.error({
    message: `Error: ${error.message}. Please try again!`,
    backgroundColor: '#e74a3b',
    messageColor: '#fafafa',
    position: 'topRight',
    progressBarColor: '#fafafa',
  });
}
