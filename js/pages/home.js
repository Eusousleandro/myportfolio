export default function Home() {
    return `
        <section id="profile" class="profile hidden">
            <div class="text-profile">
                <h1>Olá, </h1>
                <h2 class="text-name">Eu sou o Leandro Sousa</h2>
                <span>Desenvolvedor Backend</span>
                <p>
                    Especializado em Nodejs, Javascript, TypeScript, Python, Express,
                    FastApi, MySQL, Docker e APIs.
                </p>
            </div>
            <img src="" alt="Foto do perfil" class="img-profile">
            <div class="hero-buttons">
                <a href="#projects" class="btn-primary" target="_blank">
                    Ver projetos
                </a>
                <a href="" class="btn-secondary" download>
                    Download
                </a>
            </div>
            <div class="hero-social">
                <a href="">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                    <i class="fa-solid fa-envelope"></i>
                </a>
            </div>
        </section>
    `
}