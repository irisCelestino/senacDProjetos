const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task");

button.addEventListener("click", adicionarNovaTarefa);

let minhaLista = [];

function adicionarNovaTarefa() {
  minhaLista.push({
    tarefa: input.value,
    concluida: false,
  });
  // console.log(minhaLista)
  input.value = "";

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";
  minhaLista.forEach((item, index) => {
    novaLi =
      novaLi +
      ` 
       <li class="task ${item.concluida && "done"}">
          <img src="assets/img/check.png" alt="check na tarefa" onclick="concluirTarefa(${index})">
          <p>${item.tarefa}</p>
          <img src="assets/img/trash.svg" alt="tarefa excluida" onclick="deletarItem(${index})">
       </li>
     `;
  });

  listaCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(minhaLista));
}

function recarregaLocalStorage() {
  const tarefasLocalStorage = localStorage.getItem("lista");
  if (tarefasLocalStorage) {
    minhaLista = JSON.parse(tarefasLocalStorage);
  }
  
  mostrarTarefas();
}

recarregaLocalStorage();

function concluirTarefa(index) {
  minhaLista[index].concluida = !minhaLista[index].concluida;
  mostrarTarefas();
}

function deletarItem(index) {
  minhaLista.splice(index, 1);
  mostrarTarefas();
}
