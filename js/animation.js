
export function iniAnimation() {
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

    const titles = document.querySelector('.text-name')

    if(titles) {
        activeText(titles)
    }
}

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
