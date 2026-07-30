export default function CardSkill(skill) {
    return `
            <div class="info-skill">
                <i class="${skill.icon}"></i>
                <h2 class="title-skill">${skill.name}</h2>                
                <div class="progress">
                    <div class="progress-fill" style="width: 80%;"></div>
                </div>

                <samll class="text-skill">${skill.level}</samll>

            </div>
    `
}