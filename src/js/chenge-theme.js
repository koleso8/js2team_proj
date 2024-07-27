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

function changeTheme(themeClass) {
  bodyEl.classList = '';
  bodyEl.classList.add(themeClass);
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
