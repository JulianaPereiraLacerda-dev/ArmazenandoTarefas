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
    for(let i =0; i< tarefas.length; i++){

        const li = document.createElement("li");
        li.innerText = tarefas[i]
    
        //botão remmover
        const botaoRemover = document.createElement("button");
        botaoRemover.innerText = "🗑️";
        botaoRemover.className = "botaoRemover"

        botaoRemover.addEventListener("click", () => {
        removerTarefas(i);
        })

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);
    }
}


function removerTarefas(posicaoTarefa){

    //splice -> dentro dele nos temos (posição inicial, quantidade de itens)
    tarefas.splice(posicaoTarefa, 1);

    //depois de remover chamo a função de salvar no LocalStorage
    salvarTarefas();

    //mostra as tarefas que foram atualizadas, sem as que foram removidas 
    mostrarTarefas();
}


/*
    let i = o -> valor inicial da repetição vai iniciar em zero
    // i< lista.lenght -> valida se o i é menor que o tamanho da lista lenght-> verifica o tamanho da lista 
*/

//função adicionar tarefas
function adicionarTarefas(){
    const valorTarefa = inputTarefa.value;

    if(valorTarefa === ""){
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(valorTarefa);// adiciona a tarefa digitada dentro do array
    inputTarefa.value = "";

    salvarTarefas();
    mostrarTarefas();
}

//função para carregar tarefas salvas no localStorage
function carregarTarefas(){
    const tarefasSalvas = localStorage.getItem("tarefas");// pega as tarefas e armazena na variável
    
    //Se exisitir alguma coisa dentro de tarefas salvas, então converte a tarefa e mostra na tela.
    if(tarefasSalvas){
        tarefas = JSON.parse(tarefasSalvas); //transforma o texto em array novamente

    }
}

botaoAdicionar.addEventListener("click", adicionarTarefas)