const botaoVerificar = document.querySelector('#verificar');
const separador = document.querySelector('#separador');
const textoRecebido = document.querySelector('#numeros');

const divResultado = document.querySelector('#resultado');

botaoVerificar.addEventListener('click', () => {
    const listaTexto = textoRecebido.value.split(',');
    const lista = listaTexto.map(Number);

    const maior = Math.max(...lista);
    const menor = Math.min(...lista);

    divResultado.innerHTML = `Maior:  ${maior}  <br>  Menor:  ${menor}`;

});

