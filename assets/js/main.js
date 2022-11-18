const botaoParaAdicionarTarefa = document.querySelector('#addTarefa');
const inputTarefa = document.querySelector('#tarefa');
const boxQueReceberarElementoFilho = document.querySelector('.box-2');
const boxQueReceberarTarefasConcluidas = document.querySelector('.box-3');
const divTarefa = document.querySelector('.tarefas-concluidas');
let tarefasConcluidas = [];

document.body.style.overflow = 'hidden';
divTarefa.style.display = 'none';

function addElemento() {
    let li = document.createElement('li');
    let span = document.createElement('span');
    li.setAttribute('class', 'modificar');
    span.setAttribute("class", "material-symbols-outlined");
    span.setAttribute("title", "Excluir tarefa");
    li.textContent = inputTarefa.value;
    tarefasConcluidas.push(inputTarefa.value)
    li.appendChild(span);
    span.textContent = 'delete';
    boxQueReceberarElementoFilho.appendChild(li);
}

// function addTarefaConcluida() {
//     let li = document.createElement('li');
//     tarefasConcluidas.forEach(tarefa => {
//         li.textContent = tarefa.unshift();
//     })
//     boxQueReceberarTarefasConcluidas.appendChild(li);
// }

function inputEstaVazio() {
    if(inputTarefa.value === "") {
        inputTarefa.style.border = '1px solid red';
        inputTarefa.placeholder = 'Valor inválido';
    } else addElemento();
}

botaoParaAdicionarTarefa.addEventListener('click', function () {
    inputEstaVazio();
});

inputTarefa.addEventListener('focus', () => inputTarefa.value = " ")

document.onclick = event => {
    if(event.target.classList.value === 'material-symbols-outlined') {
        event.target.parentNode.remove();
        // addTarefaConcluida();
    };
}

// Objetivo principal concluído, falta só mostrar as tarefas concluídas