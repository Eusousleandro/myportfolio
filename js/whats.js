
export function SubmitWhats(event) {
    event.preventDefault()
    const nameInput = document.getElementById('name')
    const messageText = document.getElementById('message')

    const name = nameInput.value.trim()
    const msg = messageText.value.trim()

    if(name === " ") {
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = "O campo nome é Obrigatório"
        nameError.innerHTML =  " "
        return
    }

    if (msg === " ") {
        const messageError = document.getElementById('message-error')
        messageError.innerHTML = "O campo da messagem é Obrigatório"
        messageError.innerHTML = " "
        return
    }

    const phone = '5583921470522'

    const message = `Olá, me chamo ${name}, ${msg}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    console.log(url);

    window.open(url, '_blank')
}