import { Navbar } from './components/navbar.js';
import {Footer} from './components/footer.js'
import Home from './pages/home.js'
import About from './pages/about.js'
import Skills from './pages/skills.js'
import Projects from './pages/projects.js'
import Contact from './pages/contact.js'

const app = document.getElementById("app");

app.innerHTML = `
    ${Navbar()}
    <main id="content"></main>
    ${Footer()}
`

document.getElementById("content").innerHTML = Home()
document.getElementById("content").innerHTML = About()
document.getElementById("content").innerHTML = Skills()
document.getElementById("content").innerHTML = Projects()
document.getElementById("content").innerHTML = Contact()