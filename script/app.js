$(function () {
  $("#header").load("header.html", () => {
    const urlPathname = window.location.pathname

    $('.nav-link').each((i, el) => {
      const navPathname = new URL(el.href).pathname

      if (urlPathname === navPathname) {
        el.classList.add('active')
      }
    })

    const siteLogo = document.querySelector('#site-logo')

    let darkMode = localStorage.getItem('darkMode')
    const darkModeToggle = document.querySelector('#dark-mode-toggle')

    const enableDarkMode = () => {
      document.body.classList.add('darkmode')
      localStorage.setItem('darkMode', 'enabled')
      siteLogo.src = 'img/logo/soben logo two color.png'
    }

    const disableDarkMode = () => {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkMode', null)
      siteLogo.src = 'img/logo/soben-logo-hd.png'
    }

    // when refresh still apply
    if (darkMode === 'enabled') enableDarkMode()

    darkModeToggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode')
      if (darkMode !== 'enabled') {
        enableDarkMode()
      } else {
        disableDarkMode()
      }
    })
  })
})