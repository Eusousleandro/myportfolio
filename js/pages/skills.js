import { skills } from "../data/skills.js"
import CardSkill from "../components/card.skill.js"

export default function Skills() {
    return `
        <section class="skills hidden">
            <h1 class="title-skills">Habilidades técnicas</h1>
            <div class="card-skill">
                ${skills.map(skill => CardSkill(skill)).join("")}
            </div>
        </section>
    `
}