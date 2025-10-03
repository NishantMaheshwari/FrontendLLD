const body = document.querySelector('body');
const modalButton = document.querySelector('.open-modal-btn');

modalButton.addEventListener('click', (event) => {
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  modalWrapper.style.cssText = 'width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.5)';
  body.append(modalWrapper);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.cssText = 'width: 20vw; height: 20vw; display: flex; align-items: center; justify-content: center; background: red';
  modalWrapper.append(modal);

  const close = document.createElement('button');
  close.classList.add('close-btn');
  close.style.cssText = 'width: 10vw; padding: 5px; display: flex; align-items: center; justify-content: center; cursor: pointer;'
  close.textContent = 'Close';
  modal.append(close);

  modalWrapper.addEventListener('mousedown', (event) => {
    modalWrapper.remove();
  });

  close.addEventListener('mousedown', (event) => {
    modalWrapper.remove();
  });

  modal.addEventListener('mousedown', (event) => {
    event.stopPropagation();
  })

});