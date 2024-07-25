const refs = {
  deskMenuBtn: document.querySelector('.desk-menu-btn'),
  deskMenu: document.querySelector('.desk-menu'),
  deskMenuBox: document.querySelector('.desk-menu-box'),
  header: document.querySelector('.header'),
};

function closeMenu() {
  refs.deskMenu.classList.add('visually-hidden');
}

refs.deskMenuBtn.addEventListener('click', () => {
  refs.deskMenu.classList.toggle('visually-hidden');
});

refs.deskMenu.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    closeMenu();
  }
});

document.addEventListener('click', event => {
  if (!refs.deskMenuBox.contains(event.target)) {
    closeMenu();
  }
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  if (currentScrollTop > lastScrollTop) {
    refs.header.classList.add('hidden');
  } else if (currentScrollTop < lastScrollTop) {
    refs.header.classList.remove('hidden');
  }
  lastScrollTop = currentScrollTop;
});
