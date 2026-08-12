
export function SubmitWhats(event) {
    event.preventDefault()
    const nameInput = document.getElementById('name')
    const messageText = document.getElementById('message')
    const nameError = document.getElementById('name-error')
    const messageError = document.getElementById('message-error')

    const name = nameInput.value.trim()
    const msg = messageText.value.trim()

    nameError.innerHTML =  " "
    messageError.innerHTML = " "

    if(name === " ") {
        nameError.innerHTML = "O campo nome é Obrigatório"
        return
    }

    if (msg === " ") {
        messageError.innerHTML = "O campo da messagem é Obrigatório"
        return
    }

    const phone = '5583921470522'

    const message = `Olá, me chamo ${name}, ${msg}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    console.log(url);

    window.open(url, '_blank')
}