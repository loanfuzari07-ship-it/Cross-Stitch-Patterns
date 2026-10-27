/* Hotmart checkouts supplied by the owner.
   Essential: $9.99. Complete: $17.99. Complete upgrade: $12.99. */
window.CHECKOUT_LINKS = Object.freeze({
  essential: "https://pay.hotmart.com/T108205771R?off=cgvqjiuj&checkoutMode=10",
  complete: "https://pay.hotmart.com/N108205649X?off=70b61tev&checkoutMode=10",
  completeUpgrade: "https://pay.hotmart.com/N108205649X?off=s4kzxq8y&checkoutMode=10"
});

(() => {
  'use strict';
  const galleries = document.querySelectorAll('.marquee');
  galleries.forEach(gallery => {
    const group = gallery.querySelector('.marquee-group');
    const copy = group.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.querySelectorAll('button').forEach(button => button.tabIndex = -1);
    gallery.querySelector('.marquee-track').append(copy);
  });
  galleries.forEach(gallery => {
    gallery.tabIndex = 0;
    gallery.setAttribute('aria-description', 'Press Space to pause or resume image motion.');
    gallery.addEventListener('keydown', event => {
      if (event.target === gallery && event.code === 'Space') {
        event.preventDefault();
        document.body.classList.toggle('motion-paused');
      }
    });
  });
  const imageDialog = document.getElementById('image-dialog');
  const checkoutDialog = document.getElementById('checkout-dialog');
  const upgradeDialog = document.getElementById('upgrade-dialog');
  const syncModalState = () => document.body.classList.toggle('modal-open', !!document.querySelector('dialog[open]'));
  const openDialog = dialog => { if (!dialog.open) dialog.showModal(); syncModalState(); };
  const continueToCheckout = key => {
    const value = window.CHECKOUT_LINKS?.[key];
    let url;
    try { url = new URL(value); } catch { url = null; }
    if (url && url.protocol === 'https:') {
      window.location.assign(url.href);
    } else {
      checkoutDialog.dataset.checkoutPlan = key;
      openDialog(checkoutDialog);
    }
  };
  document.addEventListener('click', event => {
    const close = event.target.closest('.dialog-close, .dialog-dismiss');
    if (close) { close.closest('dialog').close(); return; }
    const decision = event.target.closest('[data-upgrade-choice]');
    if (decision) {
      upgradeDialog.close();
      continueToCheckout(decision.dataset.upgradeChoice);
      return;
    }
    const preview = event.target.closest('.preview-button');
    if (preview) {
      const image = document.getElementById('dialog-image');
      image.src = preview.dataset.image;
      image.alt = preview.querySelector('img').alt;
      openDialog(imageDialog);
      return;
    }
    const checkout = event.target.closest('[data-checkout]');
    if (checkout) {
      if (checkout.dataset.checkout === 'essential') openDialog(upgradeDialog);
      else continueToCheckout(checkout.dataset.checkout);
    }
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('close', syncModalState);
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
    });
  });
})();
