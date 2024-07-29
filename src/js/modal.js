import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import svg from '../images/svg/icons.svg';

export function createModal(result) {
  const instance = basicLightbox.create(
    `
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">${result.title}</h3>
    <p class="text-modal">
      ${result.message}
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="${svg}#close"></use>
      </svg>
    </a>
  </div>
</div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('a').onclick = instance.close;
        document.addEventListener('keydown', e => {
          if (e.code === 'Escape') instance.close();
        });
        document.body.style.position = 'fixed';
      },
      onClose: instance => {
        console.log('onClose', instance);
        document.body.style.position = '';
      },
    }
  );
  instance.show();
}
