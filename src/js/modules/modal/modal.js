const modal = () => {
  function onModal(modalTrigger, openTrigger, closeTrigger) {
    const modal = document.querySelectorAll(modalTrigger);
    const open = document.querySelector(openTrigger);
    const close = document.querySelector(closeTrigger);

    modal.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        open.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', (e) => {
      open.style.display = 'none';
      document.body.style.overflow = '';
    });

    open.addEventListener('click', (e) => {
      if (e.target === open) {
        open.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
  onModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  onModal('.phone_link', '.popup', '.popup .popup_close');
};

export default modal;
