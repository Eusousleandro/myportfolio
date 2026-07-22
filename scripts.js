const Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })

    console.log(entries)
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => Observer.observe(element))

function EnviarWhats(event) {
    event.preventDefault()
    const name = document.getElementById('#name')
    const message = document.getElementById('#message')
    const phone = "83921470522"
    const url = `Olá ${name}, ${message}`

    window.open(url, '_black')
}

alert('Hello')