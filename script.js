// Menu e rodapé partilhados: para adicionar uma página, acrescenta uma linha aqui.
const PAGINAS = [
  { id: "inicio", nome: "Início", ficheiro: "index.html" },
  { id: "sobre", nome: "Quem somos", ficheiro: "sobre.html" },
  { id: "cursos", nome: "Cursos", ficheiro: "cursos.html" },
  { id: "formacao", nome: "Formação Profissional", ficheiro: "formacao.html" },
  { id: "estagios", nome: "Estágios", ficheiro: "estagios.html" },
  { id: "noticias", nome: "Notícias", ficheiro: "noticias.html" },
  { id: "graduacoes", nome: "Graduações", ficheiro: "graduacoes.html" },
  { id: "regulamento", nome: "Regulamento", ficheiro: "regulamento.html" },
  { id: "contactos", nome: "Contactos", ficheiro: "contactos.html" },
  { id: "inscricao", nome: "Fazer inscrição", ficheiro: "https://institutoaqsa.github.io/Inscricao/", destaque: true },
];

// Notícias: acrescenta objetos aqui e aparecem na página Notícias.
// Exemplo: { data: "2026-11-07", titulo: "Abertura de inscrições", texto: "..." }
const NOTICIAS = [];

const atual = document.body.dataset.pagina;

const ligacoes = PAGINAS.map(p =>
  `<li><a href="${p.ficheiro}"${p.destaque ? ' class="destaque"' : ""}${p.id === atual ? ' aria-current="page"' : ""}>${p.nome}</a></li>`
).join("");

document.getElementById("topo").innerHTML = `
  <div class="topo"><div class="wrap">
    <div class="linha-marca">
      <a class="marca" href="index.html"><img class="logo" src="logo.jpg" alt="" width="58" height="54">ITMPA</a>
      <button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
    </div>
    <nav aria-label="Principal"><ul class="menu" id="menu">${ligacoes}</ul></nav>
  </div></div>`;

const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  btn.setAttribute("aria-expanded", aberto);
});

const ligacoesRodape = PAGINAS.map(p =>
  `<li><a href="${p.ficheiro}"${p.destaque ? "" : ""}>${p.nome}</a></li>`
).join("");

document.getElementById("rodape").innerHTML = `
  <footer class="rodape">
    <div class="wrap grelha">
      <div>
        <strong>Instituto Técnico Médio Profissional AQSA</strong>
        <p>Inovação educacional, rigor profissional e transformação de futuros.</p>
        <p>Juntos na luta pelo desenvolvimento de Moçambique, criando o auto-emprego.</p>
      </div>
      <div>
        <strong>Navegação</strong>
        <ul class="rodape-lista">${ligacoesRodape}</ul>
      </div>
      <div>
        <strong>Contactos</strong>
        <p>Manga, Cidade da Beira, Bairro de Ndunda, depois da Cadeia, ao lado do mercado</p>
        <p>Atendimento: das 08h00 às 18h00</p>
        <p>Tel.: <a href="tel:+258875850789">+258 87 585 0789</a></p>
        <p><a href="mailto:info.institutoaqsa@gmail.com">info.institutoaqsa@gmail.com</a></p>
        <p><a href="https://wa.me/258875850789" target="_blank" rel="noopener">WhatsApp</a></p>
      </div>
      <div>
        <strong>Acompanhe-nos</strong>
        <p>Acompanhe as atividades e os eventos do instituto na nossa <a href="https://www.facebook.com/profile.php?id=100063816139426" target="_blank" rel="noopener">página do Facebook</a>.</p>
        <p><a href="https://institutoaqsa.github.io/Inscricao/">Inscrições abertas: faça a sua pré-inscrição</a></p>
      </div>
    </div>
    <div class="rodape-base"><div class="wrap">
      <p>&copy; ${new Date().getFullYear()} Instituto Técnico Médio Profissional AQSA. Todos os direitos reservados. NUIT: 0326598745.</p>
      <p><a href="regulamento.html">Regulamento interno</a> &middot; <a href="contactos.html#perguntas">Perguntas frequentes</a></p>
    </div></div>
  </footer>`;

const lista = document.getElementById("lista-noticias");
if (lista) {
  if (NOTICIAS.length === 0) {
    lista.innerHTML = `<p class="vazio-msg">Ainda não há notícias publicadas. Acompanhe as atividades mais recentes na nossa <a href="https://www.facebook.com/profile.php?id=100063816139426" target="_blank" rel="noopener">página do Facebook</a>.</p>`;
  } else {
    lista.innerHTML = NOTICIAS.map(n => `
      <article class="noticia"><time datetime="${n.data}">${new Date(n.data).toLocaleDateString("pt-PT")}</time>
      <h3>${n.titulo}</h3><p>${n.texto}</p></article>`).join("");
  }
}

// Carrossel de fotos do herói (página inicial)
const fotos = document.querySelectorAll(".slides img");
if (fotos.length > 1) {
  let atualFoto = 0, relogio = null;
  const parado = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const botaoPausa = document.getElementById("slide-pausa");
  const mostrarFoto = n => {
    fotos[atualFoto].classList.remove("ativo");
    atualFoto = (n + fotos.length) % fotos.length;
    fotos[atualFoto].classList.add("ativo");
  };
  const parar = () => { clearInterval(relogio); relogio = null; botaoPausa.innerHTML = "&#9654;"; botaoPausa.setAttribute("aria-label", "Retomar a rotação das fotos"); };
  const iniciar = () => { clearInterval(relogio); relogio = setInterval(() => mostrarFoto(atualFoto + 1), 6000); botaoPausa.innerHTML = "&#10074;&#10074;"; botaoPausa.setAttribute("aria-label", "Pausar a rotação das fotos"); };
  document.getElementById("slide-ant").addEventListener("click", () => mostrarFoto(atualFoto - 1));
  document.getElementById("slide-prox").addEventListener("click", () => mostrarFoto(atualFoto + 1));
  botaoPausa.addEventListener("click", () => (relogio ? parar() : iniciar()));
  parado ? parar() : iniciar();
}

// Galeria de Graduações: clicar numa foto abre-a em tamanho grande
const miniaturas = document.querySelectorAll(".galeria button");
if (miniaturas.length) {
  const dlg = document.createElement("dialog");
  dlg.className = "galeria-dialogo";
  dlg.innerHTML = `<button type="button" class="fechar" aria-label="Fechar">&times;</button>
    <button type="button" class="nav ant" aria-label="Foto anterior">&#8249;</button>
    <img alt=""><button type="button" class="nav prox" aria-label="Foto seguinte">&#8250;</button>`;
  document.body.appendChild(dlg);
  const grande = dlg.querySelector("img");
  let pos = 0;
  const abrir = n => {
    pos = (n + miniaturas.length) % miniaturas.length;
    grande.src = miniaturas[pos].dataset.src;
    grande.alt = miniaturas[pos].dataset.alt;
    if (!dlg.open) dlg.showModal();
  };
  miniaturas.forEach((b, i) => b.addEventListener("click", () => abrir(i)));
  dlg.querySelector(".fechar").addEventListener("click", () => dlg.close());
  dlg.querySelector(".ant").addEventListener("click", () => abrir(pos - 1));
  dlg.querySelector(".prox").addEventListener("click", () => abrir(pos + 1));
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") abrir(pos - 1);
    if (e.key === "ArrowRight") abrir(pos + 1);
  });
}

// Botão flutuante de WhatsApp
const zap = document.createElement("a");
zap.className = "botao-whatsapp";
zap.href = "https://wa.me/258875850789?text=" + encodeURIComponent("Olá, gostaria de obter mais informações sobre os cursos do instituto.");
zap.target = "_blank";
zap.rel = "noopener";
zap.setAttribute("aria-label", "Falar connosco no WhatsApp");
zap.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20z"/></svg><span>WhatsApp</span>`;
document.body.appendChild(zap);
