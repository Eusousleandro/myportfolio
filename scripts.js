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

function SubmitWhats() {
    const name = document.getElementById('name')
    const msg = document.getElementById('message')
    const phone = '83921470522'

    const url = ``

    window.open(url, _blank)
}