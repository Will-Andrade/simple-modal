const displayModalBtn = document.querySelector('[data-js="display-modal"]');
const modalBg = document.querySelector('[data-js="modal-bg"]');
const hideModalBtn = document.querySelector('[data-js="hide-modal"]');
const modalClose = document.querySelector('[data-js="modal-close"]');

const closeModal = () => modalBg.classList.remove('bg-active');
const displayModal = () => modalBg.classList.add('bg-active');

displayModalBtn.addEventListener('click', displayModal);
hideModalBtn.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
