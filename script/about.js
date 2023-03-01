const eduContainer = document.querySelector('.edu-container')
const coursesContainer = document.querySelector('.courses-container')
const expContainer = document.querySelector('.exp-container')
const actContainer = document.querySelector('.act-container')

// $(function () {
//   $("#header").load("header.html")
// })

const fetchData = async () => {
  const response = await fetch(`./db/about.json`)
  const json = await response.json()

  const education = json.filter(cat => cat.education)
  const courses = json.filter(cat => cat.courses)
  const exp = json.filter(cat => cat.experience)
  const activities = json.filter(cat => cat.activities)

  education.forEach(item => {
    eduContainer.innerHTML = item.education.map(edu => (
      createItem(edu)
    )).reverse().join('')
  })

  courses.forEach(item => {
    coursesContainer.innerHTML = item.courses.map(course => (
      createItem(course)
    )).reverse().join('')
  })

  exp.forEach(item => {
    expContainer.innerHTML = item.experience.map(course => (
      createItem(course)
    )).reverse().join('')
  })

  activities.forEach(item => {
    actContainer.innerHTML = item.activities.map(course => (
      createItem(course)
    )).reverse().join('')
  })
}

const createItem = (item) => (
  `
  <div class="card flex-box">
    <img
      src="${item.logo}"
      alt="${item.place}"
      class="card-logo"
    />
    <div>
      <h1 class="title mb-1">${item.title}</h1>
      <p class="sub-title">
        <i class="fa-solid fa-location-dot"></i> ${item.place}
      </p>
      <p class="sub-date mb-1">
        <i class="fa-solid fa-calendar-days"></i> ${item.date}
      </p>
      <p class="desc">${item.description}</p>
    </div>
  </div>
  `
)

fetchData()