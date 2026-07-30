export function initTheme() {
    const html = document.documentElement
    const button = document.getElementById('theme-toogle')


    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === "ligth") {
        html.setAttribute("data-theme", "ligth")
    }

    button?.addEventListener('click', () => {
        const isLigth = html.getAttribute("data-theme") === "ligth"

        if(isLigth){
            html.removeAttribute("data-theme")
            localStorage.setItem("theme", "dark")
        } else {
            html.setAttribute("data-theme", "ligth")
            localStorage.setItem("theme", "ligth")
        }
    });
}