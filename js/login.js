// Troca entre login e cadastro

function exibeLoginECadastro(){
  const criarConta = document.querySelector('#btn-cadastrar');
  const fazerLogin = document.querySelector('#btn-login');
  
  criarConta.addEventListener('click', () => {
    const cadastro = document.querySelector('.cadastro');
    cadastro.classList.remove('disable')
    const login = document.querySelector('.right-login');
    login.classList.add('disable');
  })
  fazerLogin.addEventListener('click', () => {
    const cadastro = document.querySelector('.cadastro');
    cadastro.classList.add('disable');
    const login = document.querySelector('.right-login');
    login.classList.remove('disable');
  })
}

// Exibe mensagem de erro

const botaoLogin = document.querySelectorAll('.inButton');
botaoLogin.forEach((botao) => {
  botao.addEventListener('click', (e) => {
    e.preventDefault();
    const aviso = document.querySelector('.aviso');
    aviso.classList.remove('disable');
    const body = document.querySelector('body');
    body.classList.add('dark-body');
  })
})

exibeLoginECadastro();