// # id
// . classe

const titulo = document.querySelector('#titulo');
const botao = document.querySelector('#btn-mudar');

botao.addEventListener('click', () => {
    // a const titulo é responsável por capturar o elemento de titulo do HTML e fazer com que,
    // essa função, altere o texto após clicar no botão.
    titulo.innerText = "DOM manipulado com sucesso!";
    titulo.style.color = "purple";
    document.body.style.backgroundColor = "#f0f0f0";

});

window.addEventListener('keydown', () => {

    console.log("Você apertou a tecla: " + event.key);

});

const div = document.querySelector('#caixa-magica');

let larguraAtual = 300;
let alturaAtual = 300;
let tamanho = 50;

window.addEventListener('keydown', (event) => {

    div.innerText = (event.key);

    if (event.key === 'R' || event.key === 'r'){

        div.style.backgroundColor = 'red';

    } else if (event.key === 'G' || event.key === 'g'){

        div.style.backgroundColor = 'green';

    } else if (event.key === 'B' || event.key === 'b'){
        
        div.style.backgroundColor = 'blue';

    } else if (event.key === 'Backspace') {

        div.innerText = ''; 
    }

    if (event.key == 'Enter') {
        larguraAtual += tamanho;
        div.style.width = (larguraAtual) + 'px';
        div.style.height = (larguraAtual) + 'px';
    }
    if (event.key === 'Shift') {
        larguraAtual -= tamanho;
        div.style.width = (larguraAtual) + 'px';
        div.style.height = (larguraAtual) + 'px';
    }  

});
