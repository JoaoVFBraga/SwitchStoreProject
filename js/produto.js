function alteraHTMLProdutos() {
  const imagemDetalhes = document.querySelector(".imagem-detalhes");
  const nomeDetalhes = document.querySelector(".nome-detalhes");
  const precoDetalhes = document.querySelector(".detalhes-pix");

  let novaImagem = localStorage.getItem("imagemProduto");
  let novoNome = localStorage.getItem("nomeProduto");
  let novoPreco = localStorage.getItem("valorProduto");

  nomeDetalhes.innerText = novoNome;
  precoDetalhes.innerText = novoPreco;
  imagemDetalhes.src = novaImagem;

  const precoFormatado = Number(novoPreco.substring(3).replace(",", "."));
  const precoDividido = (precoFormatado * 1.2) / 12;
  const divididoDoc = document.querySelector(".preco-dividido-cartao");
  divididoDoc.innerText = `R$ ${precoDividido.toFixed(2).replace(".", ",")}`;
}

alteraHTMLProdutos();

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
