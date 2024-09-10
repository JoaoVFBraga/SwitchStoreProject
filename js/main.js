// Acionamento do menu lateral e carrinho

function acionaMenuECarrinho(){
  const btnMenu = document.querySelector('.menu-icon');
  const btnCarrinho = document.querySelector('.cart');
  const closeMenu = document.querySelector('.close-menu');
  const itensMenu = document.querySelectorAll('.item-menu');
  const closeCarrinho = document.querySelector('.close-carrinho');
  
  btnMenu.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.add('dark-body');
    const menu = document.querySelector('.menu');
    menu.classList.remove('disable');
    menu.classList.add('show');
  });
  
  closeMenu.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.remove('dark-body');
    const menu = document.querySelector('.menu');
    menu.classList.add('disable');
  });
  
  itensMenu.forEach((item) => {
    item.addEventListener('click', () => {
      const body = document.querySelector('body');
      body.classList.remove('dark-body');
      const menu = document.querySelector('.menu');
      menu.classList.add('disable');
    })
  })
  
  btnCarrinho.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.add('dark-body');
    const carrinho = document.querySelector('.carrinho');
    carrinho.classList.remove('disable');
  })
  
  closeCarrinho.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.remove('dark-body');
    const carrinho = document.querySelector('.carrinho');
    carrinho.classList.add('disable');
  })
};
acionaMenuECarrinho();