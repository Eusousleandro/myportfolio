
export function SubmitWhats(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const msg = document.getElementById('message').value
    const nameError = document.getElementById('name-error')
    const messageError = document.getElementById('message-error')

    if(name.trim() === " ") {
        nameError.innerHTML = "O campo nome é Obrigatório"
        return
    }

    if (msg.trim() === " ") {
        messageError.innerHTML = "O campo da messagem é Obrigatório"
        return
    }

    const phone = '5583921470522'

    const message = `Olá, me chamo ${name}, ${msg}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    console.log(url);

    window.open(url, '_blank')
}