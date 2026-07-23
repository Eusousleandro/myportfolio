const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => Observer.observe(element))

function SubmitWhats(event) {
    event.preventDefault()
    const name = document.getElementById('name')
    const msg = document.getElementById('message')
    const phone = '5583921470522'

    const url = `https://wa.me/${phone},  'Olá, me chamo ' ${name}, ${msg}`

    window.open(url, '_blank')
}