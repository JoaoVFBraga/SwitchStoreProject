// Acionamento do menu lateral e carrinho

function acionaCarrinho() {
  const btnCarrinho = document.querySelector(".cart");
  const closeCarrinho = document.querySelector(".close-carrinho");
  btnCarrinho.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.add("dark-body");
    const carrinho = document.querySelector(".carrinho");
    carrinho.classList.remove("disable");
  });

  closeCarrinho.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.remove("dark-body");
    const carrinho = document.querySelector(".carrinho");
    carrinho.classList.add("disable");
  });
}
acionaCarrinho();

function chamaCarrinho() {
  const body = document.querySelector("body");
  body.classList.add("dark-body");
  const carrinho = document.querySelector(".carrinho");
  carrinho.classList.remove("disable");
}

function acionaMenu() {
  const btnMenu = document.querySelector(".menu-icon");
  const closeMenu = document.querySelector(".close-menu");
  const itensMenu = document.querySelectorAll(".item-menu");

  btnMenu.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.add("dark-body");
    const menu = document.querySelector(".menu");
    menu.classList.remove("disable");
    menu.classList.add("show");
  });

  closeMenu.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.remove("dark-body");
    const menu = document.querySelector(".menu");
    menu.classList.add("disable");
  });

  itensMenu.forEach((item) => {
    item.addEventListener("click", () => {
      const body = document.querySelector("body");
      body.classList.remove("dark-body");
      const menu = document.querySelector(".menu");
      menu.classList.add("disable");
    });
  });
}
acionaMenu();

// Preenchimento da página de detalhes do produto

function abrePaginaDetalhes() {
  const cardsProdutos = document.querySelectorAll(".link-detalhes");
  cardsProdutos.forEach((produto) => {
    produto.addEventListener("click", (e) => {
      const nome = produto.querySelector(".produto-nome").innerText;
      const valor = produto.querySelector(".produto-preco").innerText;
      const imagem = produto.querySelector(".produto-img img").src;
      localStorage.setItem("nomeProduto", nome);
      localStorage.setItem("valorProduto", valor);
      localStorage.setItem("imagemProduto", imagem);
    });
  });

  const cardsConsoles = document.querySelectorAll(".console-div");
  cardsConsoles.forEach((produto) => {
    produto.addEventListener("click", () => {
      const nome = produto.querySelector(".console-title").innerText;
      const valor = produto.querySelector(".console-preco").innerText;
      const imagem = produto.querySelector(".link-console img").src;
      localStorage.setItem("nomeProduto", nome);
      localStorage.setItem("valorProduto", valor);
      localStorage.setItem("imagemProduto", imagem);
    });
  });
}

abrePaginaDetalhes();

const listaDeProdutos = [
  {
    id: "con01",
    nome: "Nintendo Switch Lite",
    valor: 1399.9,
    imagem: "img/produtos/lite1.jpg",
  },
  {
    id: "con02",
    nome: "Nintendo Switch V2",
    valor: 1999.9,
    imagem: "img/produtos/switch1.jpg",
  },
  {
    id: "con03",
    nome: "Nintendo Switch Oled",
    valor: 2199.9,
    imagem: "img/produtos/oled3.jpg",
  },
  {
    id: "jog01",
    nome: "Super Mario Bros. Wonder",
    valor: 299.9,
    imagem: "img/produtos/smwonder.jpg",
  },
  {
    id: "jog02",
    nome: "Pokémon Legends Arceus",
    valor: 349.9,
    imagem: "img/produtos/pokemon.jpg",
  },
  {
    id: "jog03",
    nome: "Super Mario Bros. Deluxe",
    valor: 299.9,
    imagem: "img/produtos/smdeluxe.jpg",
  },
  {
    id: "jog04",
    nome: "Kirby and the Forgotten Land",
    valor: 299.9,
    imagem: "img/produtos/kirby.jpg",
  },
  {
    id: "jog05",
    nome: "Zelda: Tears of the Kingdom",
    valor: 299.9,
    imagem: "img/produtos/zelda.jpg",
  },
  {
    id: "ace01",
    nome: "Controle JoyCon",
    valor: 349.9,
    imagem: "img/produtos/joycon.jpg",
  },
  {
    id: "ace02",
    nome: "Switch Pro Controller",
    valor: 349.9,
    imagem: "img/produtos/procontroller.jpg",
  },
  {
    id: "ace03",
    nome: "Memory Card Nintendo 256Gb",
    valor: 249.9,
    imagem: "img/produtos/memorycard.jpg",
  },
  {
    id: "ace04",
    nome: "Bolsa Pokébola para Switch",
    valor: 149.9,
    imagem: "img/produtos/bolsa.jpg",
  },
  {
    id: "ace05",
    nome: "Película para Nintendo Switch",
    valor: 49.9,
    imagem: "img/produtos/pelicula.jpg",
  },
];

function criaPesquisa() {
  const input = document.querySelector(".pesquisar-input");
  input.addEventListener("focus", () => {
    const body = document.querySelector("body");
    body.classList.add("dark-body");
    const divForm = document.querySelector(".div-form");
    divForm.classList.add("index99");
  });

  let resultadoDosProdutos = [];

  input.addEventListener("input", () => {
    const exibePesquisa = document.querySelector(".exibe-pesquisa");
    exibePesquisa.classList.remove("disable");
    exibePesquisa.innerHTML = "";
    const itemPesquisado = input.value.toLowerCase();
    resultadoDosProdutos = listaDeProdutos.filter((produto) => {
      return produto.nome.toLowerCase().includes(itemPesquisado);
    });
    if (input.value === "") {
      exibePesquisa.classList.add("disable");
    } else if (resultadoDosProdutos.length === 0) {
      const criaP = document.createElement("p");
      criaP.classList.add("mensagem-sem-produto");
      const pCriado = document.createTextNode(
        "Não foi possível encontrar o produto"
      );
      criaP.appendChild(pCriado);
      exibePesquisa.appendChild(criaP);
    } else {
      resultadoDosProdutos.forEach((produto) => {
        const nome = produto.nome;
        const valor = produto.valor;
        const imagem = produto.imagem;
        const criaA = document.createElement("a");
        criaA.classList.add("pesquisa-container");
        criaA.href = "produto.html";
        const criaImgDiv = document.createElement("div");
        criaImgDiv.classList.add("imagem-pesquisa");
        const criaImg = document.createElement("img");
        criaImg.src = imagem;
        criaImgDiv.appendChild(criaImg);
        criaA.appendChild(criaImgDiv);
        const criaInformacoes = document.createElement("div");
        criaInformacoes.classList.add("informacoes-pesquisa");
        const criaNome = document.createElement("h4");
        criaNome.classList.add("nome-pesquisa");
        const nomeCriado = document.createTextNode(nome);
        criaNome.appendChild(nomeCriado);
        criaInformacoes.appendChild(criaNome);
        const criaValor = document.createElement("span");
        criaValor.classList.add("valor-pesquisa");
        const valorCriado = document.createTextNode(`R$ ${valor.toFixed(2)}`);
        criaValor.appendChild(valorCriado);
        criaInformacoes.appendChild(criaValor);
        criaA.appendChild(criaInformacoes);

        criaA.addEventListener("click", () => {
          localStorage.setItem("nomeProduto", nome);
          localStorage.setItem("valorProduto", `R$ ${valor.toFixed(2)}`);
          localStorage.setItem("imagemProduto", imagem);
        });

        exibePesquisa.appendChild(criaA);
      });
    }
  });

  input.addEventListener("blur", () => {
    setTimeout(() => {
      const body = document.querySelector("body");
      body.classList.remove("dark-body");
      const divForm = document.querySelector(".div-form");
      divForm.classList.remove("index99");
      const exibePesquisa = document.querySelector(".exibe-pesquisa");
      exibePesquisa.classList.add("disable");
    }, 200);
  });
}

criaPesquisa();

let produtosAdicionados =
  JSON.parse(localStorage.getItem("arrayProdutosAdicionados")) || [];

function produtoClicado() {
  const botaoAdicionar = document.querySelectorAll(".btn-adicionar");
  botaoAdicionar.forEach((produto) => {
    produto.addEventListener("click", () => {
      chamaCarrinho();
      const div = produto.closest(".produto");
      const nome = div.querySelector(".produto-nome").innerText;
      const produtoClicado = listaDeProdutos.find((produto) => {
        return produto.nome.toLowerCase() === nome.toLowerCase();
      });
      adicionaAoCarrinho(produtoClicado);
    });
  });
}

produtoClicado();

function consoleClicado() {
  const botaoAdicionar = document.querySelectorAll(".console-adicionar");
  botaoAdicionar.forEach((produto) => {
    produto.addEventListener("click", () => {
      chamaCarrinho();
      const div = produto.closest(".console-div");
      const nome = div.querySelector(".console-title").innerText;
      const produtoClicado = listaDeProdutos.find((produto) => {
        return produto.nome.toLowerCase() === nome.toLowerCase();
      });
      adicionaAoCarrinho(produtoClicado);
    });
  });
}

consoleClicado();

function detalheClicado() {
  const botaoAdicionar = document.querySelector(".detalhes-adicionar");
  botaoAdicionar.addEventListener("click", () => {
    chamaCarrinho();
    const nome = document.querySelector(".nome-detalhes").innerText;
    console.log(nome);
    const produtoClicado = listaDeProdutos.find((produto) => {
      return produto.nome.toLowerCase() === nome.toLowerCase();
    });
    adicionaAoCarrinho(produtoClicado);
  });
}

detalheClicado();

function adicionaAoCarrinho(produtoClicado) {
  const carrinhoUl = document.querySelector(".carrinho-ul");
  carrinhoUl.innerHTML = "";
  produtosAdicionados.push(produtoClicado);
  localStorage.setItem(
    "arrayProdutosAdicionados",
    JSON.stringify(produtosAdicionados)
  );
  montaProdutoCarrinho();
}

document.addEventListener("DOMContentLoaded", () => {
  montaProdutoCarrinho();
});

function montaProdutoCarrinho() {
  let valorTotal = 0;
  if (produtosAdicionados.length === 0) {
    valorTotal = 0;
    const spanTotal = document.querySelector(".span-total");
    spanTotal.innerText = `R$ 00,00`;
  }
  produtosAdicionados.forEach((produto) => {
    const carrinhoUl = document.querySelector(".carrinho-ul");
    const nome = produto.nome;
    const preco = produto.valor;
    valorTotal += preco;
    const imagem = produto.imagem;

    const spanTotal = document.querySelector(".span-total");

    if (produtosAdicionados === 0) {
      console.log("zero");
    }

    spanTotal.innerText = `R$ ${valorTotal.toFixed(2)}`;

    // Cria os elementos HTML
    const criaLi = document.createElement("li");
    criaLi.classList.add("carrinho-item");
    const criaDiv1 = document.createElement("div");
    criaDiv1.classList.add("carrinho-img");
    const criaImg = document.createElement("img");
    criaImg.src = imagem;
    criaDiv1.appendChild(criaImg);
    criaLi.appendChild(criaDiv1);
    const criaDiv2 = document.createElement("div");
    criaDiv2.classList.add("carrinho-info");
    const criaNome = document.createElement("span");
    criaNome.classList.add("carrinho-nome");
    const criaConteudoNome = document.createTextNode(nome);
    criaNome.appendChild(criaConteudoNome);
    criaDiv2.appendChild(criaNome);
    const criaPreco = document.createElement("span");
    criaPreco.classList.add("carrinho-valor");
    const criaConteudoPreco = document.createTextNode(`R$ ${preco.toFixed(2)}`);
    criaPreco.appendChild(criaConteudoPreco);
    criaDiv2.appendChild(criaPreco);

    // Cria o botão de remover
    const criaRemover = document.createElement("button");
    criaRemover.classList.add("carrinho-remover");
    criaRemover.innerText = "Remover";

    // Função para remover itens do carrinho
    criaRemover.addEventListener("click", () => {
      const carrinhoUl = document.querySelector(".carrinho-ul");
      carrinhoUl.innerHTML = "";
      const removido = produtosAdicionados.splice(
        produtosAdicionados.indexOf(produto),
        1
      );
      const restantes = produtosAdicionados.filter((produto) => {
        return produto !== removido;
      });
      localStorage.setItem(
        "arrayProdutosAdicionados",
        JSON.stringify(restantes)
      );
      montaProdutoCarrinho();
    });

    criaDiv2.appendChild(criaRemover);
    criaLi.appendChild(criaDiv2);
    carrinhoUl.appendChild(criaLi);
  });
}
