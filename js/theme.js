export function initTheme() {
    const button = document.getElementById('theme-toogle')

    if(!button) return

    button.addEventListener('click', () => {
        document.body.classList.toggle('dark')
        const isDark = document.body.classList.contains('dark')

        localStorage.getItem('theme', isDark ? 'dark': 'light')
    });

    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === "dark") {
        document.body.classList.add('dark')
    }
}