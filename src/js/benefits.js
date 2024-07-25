const refs = {
  listEl: document.querySelector('.benefits-list'),
};

const benList = [
  {
    svg: './svg/icons.svg#user',
    title: 'Expertise',
    text: 'As a highly experienced developer, I have deep knowledge of programming and website development.',
  },
  {
    svg: './svg/icons.svg#message',
    title: 'Communication',
    text: ' Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
  },
  {
    svg: './svg/icons.svg#brush',
    title: 'Art',
    text: 'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. ',
  },
  {
    svg: './svg/icons.svg#hourglass',
    title: 'Urgent execution',
    text: 'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
  },
];

function itemTemplay(item) {
  const svg = item.svg;
  const title = item.title;
  const text = item.text;

  return `<li class="benefits-list-item">
        <span class="bg-icon">
          <svg class="icon-ben" width="24" height="24">
          <use href="${svg}"></use>
          </svg>
          </span>
          <h3 class="benefits-item-title">${title}</h3>
          <p class="benefits-item-text">${text}</p>
      </li>`;
}
function itemsTemplay(array) {
  return array.map(itemTemplay).join('');
}

function renderItems(array) {
  const markup = itemsTemplay(array);

  refs.listEl.insertAdjacentHTML('beforeend', markup);
}

renderItems(benList);
