import 'overlayscrollbars/overlayscrollbars.css';
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
} from 'overlayscrollbars';

document.addEventListener('DOMContentLoaded', () => {
  const defaultOptions = {
    paddingAbsolute: false,
    showNativeOverlaidScrollbars: false,
    update: {
      elementEvents: [['img', 'load']],
      debounce: [0, 33],
      attributes: null,
      ignoreMutation: null,
    },
    overflow: {
      x: 'scroll',
      y: 'scroll',
    },
    scrollbars: {
      theme: 'os-theme-dark',
      visibility: 'auto',
      autoHide: 'scroll',
      autoHideDelay: 2000,
      autoHideSuspend: false,
      dragScroll: true,
      clickScroll: true,
      pointers: ['mouse', 'touch', 'pen'],
    },
  };

  const osInstance = OverlayScrollbars(
    document.querySelector('body'),
    defaultOptions
  );
});
