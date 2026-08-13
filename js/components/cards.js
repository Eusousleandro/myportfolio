export default function Card(project) {
    return `
            <div class="info-card">
                <img src="${project.image}" alt="Foto do projeto" class="image">
                <h2 class="title-card">${project.title}</h2>
                <p class="description-card">
                    ${project.description}
                </p>
                <div class="btn-card">
                    <div class="btn-view">
                        <a href="${project.demo}" target="_blank">Ver projetos</a>
                    </div>
                    <div class="btn-code">
                        <a href="${project.github}" target="_blank">GitHub</a>
                    </div>   
                </div>
            </div>
    `
}