// Sanitizador mínimo (sem dependências) para enunciados vindos da API.
// Mantém apenas tags de texto/tabela/imagem e remove todo o resto.

const PERMITIDAS = new Set([
  "P", "BR", "B", "STRONG", "I", "EM", "U", "SUB", "SUP", "SPAN", "DIV",
  "UL", "OL", "LI", "BLOCKQUOTE", "FIGURE", "FIGCAPTION", "IMG",
  "TABLE", "THEAD", "TBODY", "TR", "TH", "TD",
]);

// Removidas junto com todo o conteúdo interno.
const REMOVER_COM_CONTEUDO = new Set([
  "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "NOSCRIPT", "TEMPLATE",
  "SVG", "MATH", "FORM", "LINK", "META", "BASE",
]);

const ATRIBUTOS_PERMITIDOS = {
  IMG: ["src", "alt", "width", "height"],
  TD: ["colspan", "rowspan"],
  TH: ["colspan", "rowspan"],
};

function urlSegura(valor) {
  if (!valor) return false;
  try {
    const url = new URL(valor, window.location.origin);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function limparNo(no) {
  Array.from(no.childNodes).forEach((filho) => {
    if (filho.nodeType === Node.TEXT_NODE) return;

    if (filho.nodeType !== Node.ELEMENT_NODE) {
      filho.remove();
      return;
    }

    const tag = filho.tagName.toUpperCase();

    if (REMOVER_COM_CONTEUDO.has(tag)) {
      filho.remove();
      return;
    }

    limparNo(filho);

    if (!PERMITIDAS.has(tag)) {
      filho.replaceWith(...Array.from(filho.childNodes));
      return;
    }

    const permitidos = ATRIBUTOS_PERMITIDOS[tag] ?? [];
    Array.from(filho.attributes).forEach((attr) => {
      if (!permitidos.includes(attr.name.toLowerCase())) {
        filho.removeAttribute(attr.name);
      }
    });

    if (tag === "IMG") {
      if (!urlSegura(filho.getAttribute("src"))) {
        filho.remove();
        return;
      }
      filho.setAttribute("loading", "lazy");
      filho.setAttribute("referrerpolicy", "no-referrer");
    }
  });
}

function escaparAtributoHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function converterImagensMarkdown(html) {
  return html.replace(/!\[([^\]]*)\]\(([^\s)]+(?:\s+[^)]*)?)\)/g,
    (_correspondencia, alt, destino) => {
      // Remove títulos opcionais do Markdown, quando houver: "url \"título\"".
      const url = destino.trim().split(/\s+["']/)[0];
      return `<img src="${escaparAtributoHtml(url)}" alt="${escaparAtributoHtml(alt)}">`;
    }
  );
}

export function sanitizarHtml(html) {
  if (!html || typeof html !== "string") return "";

  const conteudoMarkdownConvertido = converterImagensMarkdown(html);

  // DOMParser não executa scripts nem carrega recursos.
  const doc = new DOMParser().parseFromString(conteudoMarkdownConvertido, "text/html");
  limparNo(doc.body);
  return doc.body.innerHTML.trim();
}