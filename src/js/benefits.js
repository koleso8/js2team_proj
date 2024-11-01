import svg from '../images/svg/icons.svg';
const refs = {
  listEl: document.querySelector('.benefits-list'),
};

const benList = [
  {
    svg: `${svg}#user`,
    title: 'Expertise',
    text: 'As a highly experienced developer, I have deep knowledge of programming and website development.',
  },
  {
    svg: `${svg}#message`,
    title: 'Communication',
    text: ' Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
  },
  {
    svg: `${svg}#brush`,
    title: 'Art',
    text: 'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. ',
  },
  {
    svg: `${svg}#hourglass`,
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

const effect = VANTA.NET({
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.6,
  scaleMobile: 2.2,
  maxDistance: 25.0,
  el: '#animation-box',
  color: 0xed3b44,
  backgroundColor: 0x1c1d20,
  points: 9.0,
});

export function redAnimation() {
  effect.setOptions({
    color: 0xed3b44,
  });
}

export function yellowAnimation() {
  effect.setOptions({
    color: 0xc6e327,
  });
}

export function orangeAnimation() {
  effect.setOptions({
    color: 0xff7f08,
  });
}

export function greenAnimation() {
  effect.setOptions({
    color: 0x2b4441,
  });
}

export function blueAnimation() {
  effect.setOptions({
    color: 0x0041e8,
  });
}
