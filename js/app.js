import Navbar from './components/navbar.js';
import Footer from './components/footer.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Skills from './pages/skills.js'
import Projects from './pages/projects.js'
import Contact from './pages/contact.js'

import { iniAnimation } from './animation.js';
import { initTheme } from './theme.js';
import { initBtnNavBar } from './utils/btn.function.js';
import { SubmitWhats } from './whats.js';

const app = document.getElementById("app");

app.innerHTML = `
    ${Navbar()}
    <main id="content"></main>
    ${Footer()}
`

document.getElementById("content").innerHTML = `
    ${Home()}
    ${About()}
    ${Skills()}
    ${Projects()}
    ${Contact()}
`

iniAnimation()
initTheme()
initBtnNavBar()


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form")
    
    if(form) {
        form.addEventListener('submit', SubmitWhats)
    }
})