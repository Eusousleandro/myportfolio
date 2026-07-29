export default function CardSkill(skill) {
    return `
            <div class="info-skill">
                <i class="icon-skill">${skill.icon}</i>
                <h2 class="title-skill">${skill.name}</h2>
                <p class="text-skill">${skill.level}</p>
            </div>
    `
}