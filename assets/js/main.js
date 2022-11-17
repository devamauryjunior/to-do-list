const botaoParaAdicionarTarefa = document.querySelector('#addTarefa');
const inputTarefa = document.querySelector('#tarefa');
const boxQueReceberarElementoFilho = document.querySelector('.box-2');

function addElemento() {
    let span = document.createElement('span');
    span.setAttribute("class", "material-symbols-outlined");
    span.setAttribute("title", "Excluir");
    span.textContent = inputTarefa.value.concat(" delete");
    // boxQueReceberarElementoFilho.style.borderBottom = "1px solid #333333";
    boxQueReceberarElementoFilho.appendChild(span);
}

function inputEstaVazio() {
    if(inputTarefa.value === "") {
        inputTarefa.style.border = '1px solid red';
        inputTarefa.placeholder = 'Valor inválido';
    } else addElemento();
    

}

botaoParaAdicionarTarefa.addEventListener('click', function () {
    inputEstaVazio();
    
})
