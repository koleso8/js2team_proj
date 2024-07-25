import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const refs = {
  listEl: document.querySelector('.faq-list'),
};

const list = [
  {
    title: 'What programming languages are most often used in your project?',
    text: 'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    title: 'What are the deadlines for the project?',
    text: 'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    title: 'What payment methods do you accept?',
    text: 'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    title: 'How can I contact you?',
    text: 'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
  {
    title: 'Do you provide advice or support?',
    text: 'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },
  {
    title:
      'What does the process of developing a software product look like from idea to implementation?',
    text: 'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
  },
];

function listItemTemplay(item) {
  const title = item.title;
  const text = item.text;
  return `
    <li class="ac" id="ac">
    <h3 class="ac-header">
    <button type="button" class="ac-trigger" id="ac-header">
    ${title}
    <span class="circle">
    <svg class="icon" width="12" height="8">
    <use href="svg/icons.svg#arrow-down"></use>
    </svg>
    </span>
    </button>
    </h3>
    <div class="ac-panel">
    <p class="ac-text" id="ac-text">
    ${text}
    </p>
    </div>
    </li>
    `;
}
//<span class="line"></span>

function listItemsTemplay(array) {
  return array.map(listItemTemplay).join('');
}

function renderList(array) {
  const markup = listItemsTemplay(array);
  refs.listEl.insertAdjacentHTML('afterbegin', markup);
}

renderList(list);

new Accordion('.accordion-container', {});
