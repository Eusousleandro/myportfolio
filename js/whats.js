
export function SubmitWhats(event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const msg = document.getElementById('message').value
    const phone = '5583921470522'

    if(!name || !msg) {
        alert('Prencha todos os campos ')
        return
    }

    const message = `Olá, me chamo ${name}, ${msg}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    console.log(url);

    window.open(url, '_blank')
}