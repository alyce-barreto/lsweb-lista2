const inputTarefa = document.querySelector("#inputTarefa");
const listaTarefas = document.querySelector("#listaTarefas");

let tarefas = [];

function adicionarTarefa() {
    const novaTarefa = inputTarefa.value.trim();

    if (novaTarefa) {
        tarefas.push(novaTarefa);
        atualizarListaTarefas();
        inputTarefa.value = '';
    }
}

function atualizarListaTarefas() {

    listaTarefas.textContent = '';

    tarefas.forEach((novaTarefa, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = novaTarefa;
        itemLista.innerHTML += ` <button onclick="removerTarefa(${index})">Remover</button>`;
        listaTarefas.appendChild(itemLista);
    });
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarListaTarefas();
}

inputTarefa.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        adicionarTarefa();
    }
});

