import { projects } from '../data/projects.js'
import { Card } from '../components/cards.js'

export default function Projects() {
    return `
        <section id="project" class="project hidden">
            <h1 class="title-project">Meus projetos</h1>
            <div class="cards">
                ${projects.map(project => Card(project)).join("")}
            </div>
        </section>    
    `
}