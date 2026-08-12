
export function SubmitWhats(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const msg = document.getElementById('message').value
    const phone = '5583921470522'
    const messageError = document.getElementById('error')

    if(name === " ") {
        messageError.innerHTML = "O campo nome é Obrigatório"
    }

    if (msg === " ") {
        messageError.innerHTML = "O campo da messagem é Obrigatório"
    }

    const message = `Olá, me chamo ${name}, ${msg}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    console.log(url);

    window.open(url, '_blank')
}