// javascript

const menuBtn = document.querySelector('.menu-icon')
const menuUl = document.querySelector('.menu')
const exitBtn = document.querySelector('.exit-btn')

menuBtn.addEventListener('click', () => {
  menuUl.style.transform = ('translateX(0)')
})

exitBtn.addEventListener('click', () => {
  menuUl.style.transform = ('translateX(100%)')
})

