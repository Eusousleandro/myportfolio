function EnviarWhats(event) {
    event.preventDefault()
    
    const name = document.getElementById(#name)
    const message = document.getElementById(#message)
    const phone = "83921470522"

    const url = `Olá ${name}, ${message}`

    window.open(url, '_black')

}