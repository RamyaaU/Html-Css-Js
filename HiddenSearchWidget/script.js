const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//eventlistener of a click event
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})