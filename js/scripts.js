

const buttonMenu = document.getElementById('button')
const nav = document.querySelectorAll('.navbar')

buttonMenu.addEventListener((event) => {
    console.log(nav)
})

function activeText(element) {
    const arrText = element.innerHTML.split('');
    console.log(arrText)
    element.innerHTML = ''
    arrText.forEach((text, i) => {
            setTimeout(() => {
                element.innerHTML += text
        }, 75 * i)
    }) 
}


function SubmitWhats(event) {
    event.preventDefault()
    const name = document.getElementById('name')
    const msg = document.getElementById('message')
    const phone = '5583921470522'

    const url = `https://wa.me/${phone},  'Olá, me chamo ' ${name}, ${msg}`

    window.open(url, '_blank')
}