import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(
  `
     <div class="container">
     <div class="modal">
    <h3 class="title-modal">Thank you for your interest in cooperation!</h3>
    <p class="text-modal">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
    <a href="" class="close"
      ><svg class="icon" width="22" height="22">
        <use href="svg/icons.svg#close"></use>
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
  },
);

// instance.show();
