const toogle = document.querySelectorAll('.btn-theme')



function SubmitWhats(event) {
    event.preventDefault()
    const name = document.getElementById('name')
    const msg = document.getElementById('message')
    const phone = '5583921470522'

    const url = `https://wa.me/${phone},  'Olá, me chamo ' ${name}, ${msg}`

    window.open(url, '_blank')
}