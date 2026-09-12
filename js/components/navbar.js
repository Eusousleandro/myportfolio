export default function Navbar() {
    return `
        <header class="container">
            <div class="logo">
                <a href="#profile">
                    Leandro Sousa
                    <span>Developer</span>
                </a>
            </div>
            <nav class="navbar">
                <ul id="nav-links">
                    <li><a href="#profile" class="nav-link">Ínicio</a></li>
                    <li><a href="#about" class="nav-link">Sobre</a></li>
                    <li><a href="#skills" class="nav-link">Skills</a></li>
                    <li><a href="#project" class="nav-link">Projetos</a></li>
                    <li><a href="#contact" class="nav-link">Contatos</a></li>
                </ul>
            </nav>

            <div class="hamburguer">
                <button id="button">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </header>
    `
}