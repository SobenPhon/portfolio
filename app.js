// const nightMode = document.getElementById('night-mode');

// const doeModal = document.getElementById('doe-modal');
// const brandmediaModal = document.getElementById('brandmedia-modal');
// const brandtechModal = document.getElementById('brandtech-modal');
// const brandartsModal = document.getElementById('brandarts-modal');
// const brandbodiaModal = document.getElementById('brandbodia-modal');
// const overlay = document.querySelector('.overlay');
// const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModals = document.querySelectorAll('.close-modal');

const webContainer = document.querySelector('.web-container')
const sideContainer = document.querySelector('.side-container')
const videoContainer = document.querySelector('.video-container')
const liveContainer = document.querySelector('.livestream-container')
const motionContainer = document.querySelector('.motion-container')
const graphicContainer = document.querySelector('.graphic-container')

const modalsContainer = document.querySelector('.modals')

let webData = []

const fetchData = async () => {
  const response = await fetch(`./db/portfolio.json`)
  const json = await response.json()

  webData = json.filter(cat => cat.web)
  media = json.filter(cat => cat.media)

  webData.forEach(item => {
    webContainer.innerHTML = item.web.map(w => (
      createWebItem(w, 'show-web-model')
    )).reverse().join('')
  })

  webData.forEach(item => {
    sideContainer.innerHTML = item.side.map(s => (
      createWebItem(s, 'show-side-modal')
    )).reverse().join('')
  })

  media.forEach(me => {
    const video = me.media.filter(med => med.video)
    video.forEach(vi => {
      videoContainer.innerHTML = vi.video.map(v => (
        createItem(v)
      )).reverse().join('')
    })

    const livestream = me.media.filter(med => med.livestream)
    livestream.forEach(li => {
      liveContainer.innerHTML = li.livestream.map(l => (
        createItem(l)
      )).reverse().join('')
    })

    const motion = me.media.filter(med => med.motion)
    motion.forEach(mo => {
      motionContainer.innerHTML = mo.motion.map(m => (
        createItem(m)
      )).reverse().join('')
    })

    const graphic = me.media.filter(med => med.graphic)
    graphic.forEach(gr => {
      graphicContainer.innerHTML = gr.graphic.map(g => (
        createItem(g)
      )).reverse().join('')
    })
  })
}

const createWebItem = (item, modalClass) => (
  `
  <div id="${item.id}" class="card ${modalClass}">
    <img
      class="card-body"
      src="${item.image}"
      alt="${item.title}"
    />
    <div class="card-header">
      <img
        class="img-icon"
        src="${item.logo}"
        alt="${item.title}"
      />
      <p>${item.title}</p>
    </div>
  </div>
  `
)

const createItem = (item) => (
  `
  <a
    href="${item.url}"
    target="_blank"
    class="card"
  >
    <img
      class="card-body"
      src="${item.image}"
      alt="${item.title}"
    />
    <div class="card-header">
      <img
        class="img-icon"
        src="${item.logo}"
        alt="${item.title}"
      />
      <p>${item.title}</p>
    </div>
  </a>
  `
)

fetchData().then(() => {
  const webModals = document.querySelectorAll('.show-web-model')
  const sideModals = document.querySelectorAll('.show-side-modal')

  webModals.forEach((modal, index) => {
    modal.addEventListener('click', e => {
      let modalId = e.target.parentElement.id
      if (!modalId) {
        modalId = e.target.parentElement.parentElement.id
      }
      showModal(modalId, 'web')
    })
  })

  sideModals.forEach(modal => {
    modal.addEventListener('click', e => {
      let modalId = e.target.parentElement.id
      if (!modalId) {
        modalId = e.target.parentElement.parentElement.id
      }
      showModal(modalId, 'side')
    })
  })
})

// Show Modal Function
function showModal(modalId, modal) {
  modalsContainer.classList.remove('hidden');
  modalsContainer.classList.add('overlay');

  webData.forEach(item => {
    switch (modal) {
      case 'web':
        item.web.map((w, id) => {
          if (w.id === Number(modalId)) {
            modalsContainer.innerHTML = (
              createModal(w)
            )
          }
        })
        break
      case 'side':
        item.side.map((w, id) => {
          if (w.id === modalId) {
            modalsContainer.innerHTML = (
              createModal(w)
            )
          }
        })
        break
      default:
        break
    }
  })

  const btnCloseModal = document.querySelector('.close-modal')
  btnCloseModal.addEventListener('click', () => {
    closeModal()
  })
}

const createModal = (data) => (
  `
  <div class="container-flex">
    <button class="close-modal">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="item-flex img">
      <img src="${data.image}" alt="" />
    </div>
    <div class="item-flex desc">
      <h2>
        <i class="fa-solid fa-square-poll-vertical"></i> Project:
        <span>${data.detail.project}</span>
      </h2>
      <h2>
        <i class="fa-solid fa-square-arrow-up-right"></i> Website:
        <a href="${data.detail.url}">
          ${data.detail.url}
        </a>
      </h2>
      <h2>
        <i class="fa-brands fa-facebook-square"></i> Facebook:
        <a
          href="${data.detail.facebook}"
          target="_blank"
          >${data.detail.project}</a
        >
      </h2>
      <p class="mt-2 my-2">${data.detail.description}</p>
      <a
        href="${data.detail.url}"
        target="_blank"
        class="btn btn-primary"
        >Visit Website</a
      >
    </div>
  </div>
  `
)

function closeModal() {
  modalsContainer.classList.add('hidden')
  modalsContainer.classList.remove('overlay')
}