let amigos = [];

let nome = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');



function listaDeAmigos() {
    lista.innerHTML = amigos.join('<br>');
}

function adicionarAmigo() {
        if (nome.value === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome.value);
        listaDeAmigos();
        nome.value = '';
    }
}


function sortearAmigo() {
    lista.innerHTML ='';
    let indice = Math.floor(Math.random()* amigos.length);
    let amigoSorteado= amigos[indice]
    resultado.innerHTML = amigoSorteado;   
}