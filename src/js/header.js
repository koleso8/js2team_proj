import * as basicLightbox from 'basiclightbox';

const refs = {
  deskMenuBtn: document.querySelector('.desk-menu-btn'),
  deskMenu: document.querySelector('.desk-menu'),
  deskMenuBox: document.querySelector('.desk-menu-box'),
  header: document.querySelector('.header'),
  mobMenuBtn: document.querySelector('.mob-menu-btn'),
  mobMenuBackdrop: document.querySelector('.mob-menu-backdrop'),
};
// #region desk menu
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
// #endregion

//  #region mob-menu
refs.mobMenuBtn.addEventListener('click', onMobMenuBtnClick);

function onMobMenuBtnClick() {
  const mobInstance = basicLightbox.create(
    `
    <div class="mob-menu-backdrop">
  <div class="mob-menu-background">
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
    <div class="rectangle"></div>
  </div>
  <div class="mob-menu-modal">
    <ul class="mob-menu-list">
      <li class="mob-menu-item">
        <a href="#about-me" class="mob-menu-link">About me</a>
      </li>
      <li class="mob-menu-item">
        <a href="#benefits" class="mob-menu-link">Benefits</a>
      </li>
      <li class="mob-menu-item">
        <a href="#projects" class="mob-menu-link">Projects</a>
      </li>
      <li class="mob-menu-item">
        <a href="#faq" class="mob-menu-link">FAQ</a>
      </li>
    </ul>
    <a href="#work-together" class="mob-order-btn">Order the project</a>
  </div>
</div>
    `,
    {
      onShow: mobInstance => {
        const menuLinks = mobInstance.element().querySelectorAll('a');
        const backdrop = mobInstance
          .element()
          .querySelector('.mob-menu-backdrop');

        backdrop.addEventListener('click', () => {
          mobInstance.close();
        });

        menuLinks.forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
            mobInstance.close();
          });
        });

        const orderBtn = mobInstance.element().querySelector('.mob-order-btn');
        if (orderBtn) {
          orderBtn.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(
              orderBtn.getAttribute('href')
            );
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
            mobInstance.close();
          });
        }
      },
    }
  );

  mobInstance.show();
}

//  #endregion mob-menu
