export default function Navbar() {
    return `
        <header class="container">
            <div class="logo">
                <h1>Leandro Sousa</h1>
            </div>
            <nav class="navbar">
                <ul class="navigtion">
                    <li><a href="#profile" class="nav-link">Ínicio</a></li>
                    <li><a href="#about" class="nav-link">Sobre</a></li>
                    <li><a href="#project" class="nav-link">Projetos</a></li>
                    <li><a href="#contact" class="nav-link">Contatos</a></li>
                </ul>
            </nav>

            <button class="hamburguer" id="button">
                <i class="fa-solid fa-bars"></i>
            </button>
        </header>
    `
}