export default function Contact() {
    return `
        <section id="contact" class="contact hidden">
            <div class="title-contact">
                <h1>Entre em contato</h1>
            </div>
            <div class="cta-contact">
                <div class="message">
                    <h1>Gostou do meu trabalho ou tem uma ideia que gostaria de tirar do papel?</h1>
                    <p>
                        Estou sempre aberto a novos projetos, parcerias e oportunidades. Se você deseja conversar sobre um projeto, solicitar um orçamento ou simplesmente trocar uma ideia, será um prazer receber sua mensagem.
                        Preencha o formulário abaixo ou entre em contato pelos canais disponíveis. Responderei o mais breve possível.
                    </p>
                    <span>Vamos criar algo incrível juntos!</span>
                </div>

                <form action="" id="form" class="form">
                    <div class="group-form">
                        <div class="camp-form">
                            <label for="name">Nome:</label>
                            <input type="text" placeholder="Digite o seu nome" id="name">
                            <span class="error">Digite o seu nome</span>
                        </div>

                        <div class="camp-form">
                            <label for="message">Mensagem</label>
                            <textarea name="message" rows="10" cols="15" id="message"></textarea>
                            <span class="error">Digite o seu nome</span>
                        </div>
                    </div>

                    <button class="btn-whts" type="submit">Enviar messagem</button>
                </form>
            </div>
        </section>
    `
}