const inputTarefa = document.getElementById("input-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

//criando lista vazia
let tarefas = [];

//função para salvar tarefas ------------------------------------------------------------------------------------
function salvarTarefas(){

    /*
        localSorage -> armazenamento local
        seItem -> salva no armazenamento o conteúdo recebido 
        JSON.stringfy(tarefas) -> pega a lista de tarefas, converte para texto (string) e armazena esse texto
    */
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

//função para mostrar as tarefas na tela
function mostrarTarefas(){
    listaTarefas.innerHTML ="";
    for(let i =0; i< tarefas,length; i++){

        const li = document.creaateElement("li");
        li.innerText = tarefas[i]
    }
}



/*
    let i = o -> valor inicial da repetição vai iniciar em zero
    // i< lista.lenght -> valida se o i é menor que o tamanho da lista lenght-> verifica o tamanho da lista 
*/