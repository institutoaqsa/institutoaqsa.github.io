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
const NOTICIAS = [
  {
    data: "2021-12-11", dataTexto: "Dezembro de 2021",
    titulo: "Instituto Mubhangue gradua mais de 150 formandos",
    texto: "Mais de 150 estudantes concluíram a sua formação e receberam o certificado numa cerimónia de graduação realizada num sábado, segundo a reportagem televisiva. As imagens mostram a sala da cerimónia, os graduados com as suas faixas e as declarações de formandos à imprensa.",
    video: "video01.mp4", poster: "poster01.jpg"
  },
  {
    data: "", dataTexto: "",
    titulo: "Graduados e responsáveis falam à imprensa na cerimónia de graduação",
    texto: "Equipas de televisão acompanharam a cerimónia de graduação do instituto e recolheram declarações de graduados e de responsáveis, com os formandos de faixa sentados no recinto da cerimónia.",
    video: "video02.mp4", poster: "poster02.jpg"
  },
  {
    data: "2021-12-04", dataTexto: "Dezembro de 2021",
    titulo: "Exames de recorrência: segunda época no Instituto Mubhangue",
    texto: "Os exames de recorrência, da segunda época, dão aos formandos uma nova oportunidade de avaliação. A reportagem mostra as salas de prova e recolhe declarações de participantes no instituto.",
    video: "video03.mp4", poster: "poster03.jpg"
  },
  {
    data: "2021-11-30", dataTexto: "Novembro de 2021",
    titulo: "Exames finais: formandos falam à reportagem",
    texto: "Numa nova reportagem sobre os exames finais, formandos do Instituto de Formação Mubhangue, hoje Instituto AQSA, partilham a sua experiência com a equipa de reportagem, nas instalações do instituto.",
    video: "video04.mp4", poster: "poster04.jpg"
  },
  {
    data: "2021-11-29", dataTexto: "Novembro de 2021",
    titulo: "Exames finais: reportagem acompanha os formandos do Instituto Mubhangue",
    texto: "Uma reportagem televisiva acompanhou a realização dos exames finais no Instituto de Formação Mubhangue, hoje Instituto AQSA. A equipa esteve junto das salas de prova e conversou com formandos durante a avaliação.",
    video: "video05.mp4", poster: "poster05.jpg"
  },
];

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
      <article class="noticia">
        ${n.dataTexto ? `<time datetime="${n.data}">${n.dataTexto}</time>` : ""}
        <h3>${n.titulo}</h3>
        ${n.video ? `<video controls preload="none" playsinline poster="${n.poster}"><source src="${n.video}" type="video/mp4">O seu navegador não suporta a reprodução de vídeo.</video>` : ""}
        <p>${n.texto}</p>
      </article>`).join("");
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
