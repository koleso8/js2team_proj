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

  localStorage.removeItem(USER_DATA_KEY);

  try {
    const result = await createRequest(formData);

    if (!result) {
      throw new Error('Server error');
    }
    formEl.reset();
    firstInput.classList.remove('valid', 'invalid');
    emailValidMessage.textContent = '';
    createModal(result);
    event.target.reset();
  } catch (error) {
    showErrorMessage(error);
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
const USER_DATA_KEY = 'userFeedback';

const formData = {
  email: '',
  comments: '',
};

formEl.addEventListener('input', e => {
  formData.email = e.currentTarget.elements.email.value.trim();
  formData.comments = e.currentTarget.elements.comments.value.trim();
  saveToLS(USER_DATA_KEY, formData);
});

document.addEventListener('DOMContentLoaded', e => {
  const userData = getFromLS(USER_DATA_KEY);
  formEl.elements.email.value = userData?.email || '';
  formEl.elements.comments.value = userData?.comments || '';
});

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function getFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
