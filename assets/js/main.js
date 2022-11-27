"use strict";
const inputDotextoDaNovaTarefa = document.querySelector('#nova-tarefa');
const buttonParaAddTarefa = document.querySelector('#addTarefa');
const tarefasFinalizadas = [];

const validandoValorDoInput = (valor) => {
    let valorDoInput = valor.length > 0;
    if(valorDoInput === false) inputDotextoDaNovaTarefa.style.border = '0.1rem solid red';
    return valorDoInput;
    
}
const addAtributosNoSpanESpanNoLi = (span, li, valorDoSpan) => {
    span.setAttribute('class', 'material-symbols-outlined apagar');
    span.textContent = valorDoSpan;
    li.appendChild(span);
}
const mostrandoTarefa = (ul, li, span) => {
    if(!!validandoValorDoInput(inputDotextoDaNovaTarefa.value)) {
        addAtributosNoSpanESpanNoLi(span, li, 'delete');
        li.textContent = inputDotextoDaNovaTarefa.value;
        li.appendChild(span);
        ul.appendChild(li);
    }
}
const addTarefa = () => {
    const ulDaTarefaAdicionada = document.querySelector('#tarefa');
    const liDaTarafaAdicionada = document.createElement('li');
    const spanDelete = document.createElement('span');
    validandoValorDoInput(inputDotextoDaNovaTarefa.value);
    mostrandoTarefa(ulDaTarefaAdicionada, liDaTarafaAdicionada, spanDelete);

}
const addTarefaConcluida = () => {
    const ulTarefasConcluidas = document.querySelector('#tarefa-concluida');
    const liTarefasConcluidas = document.createElement('li');
    const spanDone = document.createElement('span');
    addAtributosNoSpanESpanNoLi(spanDone, liTarefasConcluidas, 'done')
    tarefasFinalizadas.forEach(value => {
        liTarefasConcluidas.textContent = value;
        liTarefasConcluidas.appendChild(spanDone);
        ulTarefasConcluidas.appendChild(liTarefasConcluidas);
    });
}

buttonParaAddTarefa.addEventListener('click', () => addTarefa());
inputDotextoDaNovaTarefa.onclick = () => {
    inputDotextoDaNovaTarefa.value = "";
    inputDotextoDaNovaTarefa.style.border = '0.1rem solid black';
};
inputDotextoDaNovaTarefa.addEventListener('keypress', event => {
    if(event.keyCode === 13) {
        addTarefa();
        inputDotextoDaNovaTarefa.value = "";
    }
});
document.addEventListener('click', (tag) => {
    const elemento = tag.target;
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        tarefasFinalizadas.push(elemento.parentElement.textContent.replace("delete", ""));
        addTarefaConcluida();
    }
});
