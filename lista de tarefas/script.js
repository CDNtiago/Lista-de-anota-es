let BotaoAdd = document.getElementById('botao');
let input = document.getElementById('texto');
let Tarefas = document.getElementById('tarefas');
let marcado = false;

function adicionarTarefa() {
    if (input.value != '') {
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = '-' + input.value;
        input.value = '';
        tarefa.addEventListener('click', function() {
            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            } else {
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        });
        tarefa.addEventListener('dblclick', function() {
            Tarefas.removeChild(tarefa);
        });
    }
}

BotaoAdd.addEventListener('click', adicionarTarefa);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});
