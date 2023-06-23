let nav = document.querySelector('nav')
let hamburger = document.querySelector('nav .hamburger')
let lines = document.querySelectorAll('nav .line')
let listNav = document.querySelector('.list-nav')
let links = document.querySelectorAll('.nav-link')
let body = document.getElementsByTagName('body')

hamburger.addEventListener('click', function () {
  lines.forEach(line => line.classList.toggle('turned'))
  listNav.classList.toggle('active')
  nav.classList.toggle('active')
  body[0].style.overflow = body[0].style.overflow === 'hidden' ? 'auto' : 'hidden'
})

links.forEach(link => {
  link.addEventListener('click', function () {
    lines.forEach(line => line.classList.toggle('turned'))
    listNav.classList.toggle('active')
    nav.classList.toggle('active')
    body[0].style.overflow = body[0].style.overflow === 'hidden' ? 'auto' : 'hidden'
  })
})
