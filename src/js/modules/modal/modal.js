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
        // document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', (e) => {
      open.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open');
    });

    open.addEventListener('click', (e) => {
      if (e.target === open) {
        open.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
      }
    });
  }

  const showModal = (openTrigger, closeTrigger, time) => {
    const open = document.querySelector(openTrigger);
    const close = document.querySelector(closeTrigger);
    setTimeout(() => {
      open.style.display = 'block';
      document.body.style.overflow = 'hidden';

      close.addEventListener('click', (e) => {
        open.style.display = 'none';
        document.body.style.overflow = '';
      });
    }, time);
  };
  onModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );
  onModal('.phone_link', '.popup', '.popup .popup_close');
  showModal('.popup', '.popup .popup_close', 5000);
};

export default modal;
