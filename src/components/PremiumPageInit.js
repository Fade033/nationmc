import React, {useEffect} from 'react';

export default function PremiumPageInit() {
  useEffect(() => {
    try {
      // add body marker
      try { document.body.classList.add('premium-page'); } catch (e) {}

      // transparent main wrapper
      try {
        const main = document.querySelector('.main-wrapper');
        if (main) {
          main.dataset._oldBg = main.style.background || '';
          main.style.background = 'transparent';
          main.style.backgroundColor = 'transparent';
          main.style.zIndex = '30';
          main.style.position = 'relative';
        }
      } catch (e) {}

      // make navbar transparent and pinned to the top
      try {
        const nav = document.querySelector('.navbar');
        if (nav) {
          nav.dataset._oldBg = nav.style.background || '';
          nav.dataset._oldBorder = nav.style.borderBottom || '';
          nav.dataset._oldPosition = nav.style.position || '';
          nav.dataset._oldTop = nav.style.top || '';
          nav.dataset._oldLeft = nav.style.left || '';
          nav.dataset._oldRight = nav.style.right || '';
          nav.style.background = 'transparent';
          nav.style.backgroundColor = 'transparent';
          nav.style.boxShadow = 'none';
          nav.style.borderBottom = 'none';
          nav.style.zIndex = 60;
          nav.style.position = 'fixed';
          nav.style.top = '0';
          nav.style.left = '0';
          nav.style.right = '0';
          nav.style.width = '100%';
        }
      } catch (e) {}

      // footer flush
      try {
        const footer = document.querySelector('.footer');
        if (footer) {
          footer.dataset._oldMarginTop = footer.style.marginTop || '';
          footer.style.marginTop = '0';
          footer.style.borderTop = 'none';
          footer.style.position = 'relative';
          footer.style.zIndex = '5';
        }
      } catch (e) {}

      return () => {
        try { document.body.classList.remove('premium-page'); } catch (e) {}
        try {
          const main = document.querySelector('.main-wrapper');
          if (main && main.dataset._oldBg !== undefined) {
            main.style.background = main.dataset._oldBg || '';
            main.style.backgroundColor = '';
            main.style.zIndex = '';
            main.style.position = '';
            delete main.dataset._oldBg;
          }
        } catch (e) {}
        try {
          const nav = document.querySelector('.navbar');
          if (nav) {
            nav.style.background = nav.dataset._oldBg || '';
            nav.style.borderBottom = nav.dataset._oldBorder || '';
            nav.style.boxShadow = '';
            nav.style.zIndex = '';
            nav.style.position = nav.dataset._oldPosition || '';
            nav.style.top = nav.dataset._oldTop || '';
            nav.style.left = nav.dataset._oldLeft || '';
            nav.style.right = nav.dataset._oldRight || '';
            delete nav.dataset._oldBg;
            delete nav.dataset._oldBorder;
            delete nav.dataset._oldPosition;
            delete nav.dataset._oldTop;
            delete nav.dataset._oldLeft;
            delete nav.dataset._oldRight;
          }
        } catch (e) {}
        try {
          const footer = document.querySelector('.footer');
          if (footer && footer.dataset._oldMarginTop !== undefined) {
            footer.style.marginTop = footer.dataset._oldMarginTop || '';
            footer.style.borderTop = '';
            footer.style.position = '';
            footer.style.zIndex = '';
            delete footer.dataset._oldMarginTop;
          }
        } catch (e) {}
        try {
          const sp = document.getElementById('premium-hero-spacer');
          if (sp) sp.remove();
        } catch (e) {}
        try {
          const bg = document.getElementById('premium-hero-bg');
          if (bg) bg.remove();
        } catch (e) {}
      };
    } catch (e) {
      console.error(e);
    }
  }, []);
  return null;
}
