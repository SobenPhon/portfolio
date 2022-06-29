// const nightMode = document.getElementById('night-mode');

const modals = document.querySelector('.modal');

const doeModal = document.getElementById('doe-modal');
const brandmediaModal = document.getElementById('brandmedia-modal');
const brandtechModal = document.getElementById('brandtech-modal');
const brandartsModal = document.getElementById('brandarts-modal');
const brandbodiaModal = document.getElementById('brandbodia-modal');

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

// document.addEventListener('DOMContentLoaded', () => {
//   overlay.style.display = 'none';
// });

// nightMode.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });

// Show Modal
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', () => {

    switch (btnShowModal[i].id) {
      case 'doe':
        showModal(doeModal);
        break;
      case 'brandmedia':
        showModal(brandmediaModal);
        break;
      case 'brandtech':
        showModal(brandtechModal);
        break;
      case 'brandarts':
        showModal(brandartsModal);
        break;
      case 'brandbodia':
        showModal(brandbodiaModal);
        break;

      default:
        break;
    }
  });
}

// Close Modal
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', () => {
    switch (btnCloseModal[i].parentElement.id) {
      case 'doe-modal':
        closeModal(doeModal)
        break;
      case 'brandmedia-modal':
        closeModal(brandmediaModal);
        break;
      case 'brandtech-modal':
        closeModal(brandtechModal);
        break;
      case 'brandarts-modal':
        closeModal(brandartsModal);
        break;
      case 'brandbodia-modal':
        closeModal(brandbodiaModal);
        break;

      default:
        break;
    }
  });
}

// Show Modal Function
function showModal(modal) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// Close Modal Function
function closeModal(modal) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}