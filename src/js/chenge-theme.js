import { orangeAnimation, redAnimation, yellowAnimation } from './benefits';

const refs = {
  themeList: document.querySelector('.theme-list'),
};

refs.themeList.addEventListener('click', e => {
  console.log(e.target.dataset.action);
  switch (e.target.dataset.action) {
    case 'red':
      return redAnimation();
      break;
    case 'yellow':
      return yellowAnimation();
      break;
    case 'orange':
      return orangeAnimation();
      break;

    default:
      break;
  }
});
