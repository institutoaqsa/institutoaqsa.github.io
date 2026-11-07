// Menu e rodapé partilhados: para adicionar uma página, acrescenta uma linha aqui.
const PAGINAS = [
  { id: "inicio", nome: "Início", ficheiro: "index.html" },
  { id: "sobre", nome: "Sobre", ficheiro: "sobre.html" },
  { id: "cursos", nome: "Cursos", ficheiro: "cursos.html" },
  { id: "formacao", nome: "Formação Profissional", ficheiro: "formacao.html" },
  { id: "estagios", nome: "Estágios", ficheiro: "estagios.html" },
  { id: "noticias", nome: "Notícias", ficheiro: "noticias.html" },
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
    <a class="marca" href="index.html"><img class="logo" src="logo.jpg" alt="" width="58" height="54">ITMPA</a>
    <button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
    <nav aria-label="Principal"><ul class="menu" id="menu">${ligacoes}</ul></nav>
  </div></div>`;

const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  btn.setAttribute("aria-expanded", aberto);
});

document.getElementById("rodape").innerHTML = `
  <footer class="rodape"><div class="wrap">
    <div><strong>Instituto Técnico Médio Profissional Aqsa</strong>
      <p>Juntos na luta pelo desenvolvimento de Moçambique criando o auto-emprego.</p></div>
    <div><strong>Contactos</strong>
      <p>Manga, Cidade da Beira</p>
      <p>Tel.: <a href="tel:+258875850789">+258 87 585 0789</a></p>
      <p><a href="mailto:info.institutoaqsa@gmail.com">info.institutoaqsa@gmail.com</a></p></div>
  </div></footer>`;

const lista = document.getElementById("lista-noticias");
if (lista) {
  if (NOTICIAS.length === 0) {
    lista.innerHTML = `<p class="vazio-msg">Ainda não há notícias publicadas. Volta em breve.</p>`;
  } else {
    lista.innerHTML = NOTICIAS.map(n => `
      <article class="noticia"><time datetime="${n.data}">${new Date(n.data).toLocaleDateString("pt-PT")}</time>
      <h3>${n.titulo}</h3><p>${n.texto}</p></article>`).join("");
  }
}
