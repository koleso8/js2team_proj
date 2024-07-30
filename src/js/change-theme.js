import {
  orangeAnimation,
  redAnimation,
  yellowAnimation,
  greenAnimation,
  blueAnimation,
} from './benefits';

const buttonRedEl = document.querySelector('.theme-red');
const buttonYellowEl = document.querySelector('.theme-yellow');
const buttonOrangeEl = document.querySelector('.theme-orange');
const buttonGreenEl = document.querySelector('.theme-green');
const buttonBlueEl = document.querySelector('.theme-blue');
const bodyEl = document.querySelector('body');
const chooseThemeBtnEl = document.querySelector('.choose-theme-btn');
const themeButtonsEl = document.querySelector('.theme-buttons');

const THEME_KEY = 'selectedTheme';

function saveTheme(themeClass) {
  localStorage.setItem(THEME_KEY, themeClass);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    changeTheme(savedTheme);
    applyAnimation(savedTheme);
  }
}

function changeTheme(themeClass) {
  bodyEl.classList = '';
  bodyEl.classList.add(themeClass);
  chooseThemeBtnEl.classList.remove('hidden-btn');
  themeButtonsEl.classList.add('hidden-btn');
  saveTheme(themeClass);
}

function applyAnimation(themeClass) {
  switch (themeClass) {
    case 'red':
      redAnimation();
      break;
    case 'yellow':
      yellowAnimation();
      break;
    case 'orange':
      orangeAnimation();
      break;
    case 'green':
      greenAnimation();
      break;
    case 'blue':
      blueAnimation();
      break;
    default:
      break;
  }
}

buttonRedEl.addEventListener('click', () => {
  changeTheme('red');
  redAnimation();
});

buttonYellowEl.addEventListener('click', () => {
  changeTheme('yellow');
  yellowAnimation();
});

buttonOrangeEl.addEventListener('click', () => {
  changeTheme('orange');
  orangeAnimation();
});

buttonGreenEl.addEventListener('click', () => {
  changeTheme('green');
  greenAnimation();
});

buttonBlueEl.addEventListener('click', () => {
  changeTheme('blue');
  blueAnimation();
});

chooseThemeBtnEl.addEventListener('click', () => {
  themeButtonsEl.classList.remove('hidden-btn');
  chooseThemeBtnEl.classList.add('hidden-btn');
});

loadTheme();
