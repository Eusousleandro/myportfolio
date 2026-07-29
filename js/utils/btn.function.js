export function initBtnNavBar() {
    const button = document.getElementById('button')
    const menu = document.getElementById('nav-links')
    
    button.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
}
