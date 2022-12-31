const refs = {
  openModalBtn: document.querySelectorAll('[data-film-modal-open]'),
  closeModalBtn: document.querySelector('[data-film-modal-close]'),
  modal: document.querySelector('[data-film-modal]'),

  //----------------------додав рефи------------------------------------
  filmModal: document.querySelector('.film-modal'),

  //----------------------------------------------------------
};

refs.openModalBtn.forEach(e => {
  e.addEventListener('click', toggleModal);
});
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});

//----------------------------додав функції та прослуховувачі--------------------------------------------------------

const addToLibrary = event => {
  if (event.target.classList.contains('add-to-watched-btn')) {
    console.log('просмотрено');
  }
  if (event.target.classList.contains('add-to-queue-btn')) {
    console.log('очередь');
  }

  console.log(event.currentTarget.getAttribute('id'));
};

refs.filmModal.addEventListener('click', addToLibrary);
