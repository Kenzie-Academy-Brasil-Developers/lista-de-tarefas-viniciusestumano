const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo) {
  // Criando elementos necessários
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  // Adicionando o titulo da tarefa como texto do paragrafo
  p.innerText = taskInfo.titulo;

  // Adicionando span e paragrafo a div
  div.appendChild(span);
  div.appendChild(p);

  // Criando botão para deletar tarefa
  const button = document.createElement("button");

  // Adicionando icone ao botão
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  //Removendo tarefas 
  button.addEventListener('click', function (event){
    let indexValue = tasks.indexOf(taskInfo);
    tasks.splice(indexValue, 1);
    renderElements(tasks);
  })
  
  //Prioridade das tarefas
  if(taskInfo.tipo === 'Urgente'){
    span.classList.add('span-urgent');
  }else if(taskInfo.tipo === 'Prioritário'){
    span.classList.add('span-priority');
  }else if(taskInfo.tipo === 'Normal'){
    span.classList.add('span-normal');
  }

  /// Adicionando a div e o botão de deletar ao list item
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

  //Inserindo uma nova task com evento de clique 
  let inputForSubmit = document.getElementById('mainForm');
  inputForSubmit.addEventListener('submit', function (event){
    let newTask = {};
    newTask.titulo = document.getElementById('input_title').value;
    newTask.tipo = document.getElementById('input_priority').value;
    
    tasks.push(newTask);
    renderElements(tasks);
    event.preventDefault();
  })

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  // Ajustar a lógica
  // let card = createCard(taskList[0]);
  // htmlList.appendChild(card);

  // card = createCard(taskList[1]);
  // htmlList.appendChild(card);

  // card = createCard(taskList[2]);
  // htmlList.appendChild(card);

  //loop para tarefas dinâmicas
  for(i = 0; i < taskList.length; i++){
    let card = createCard(taskList[i]);
    htmlList.appendChild(card);
  }

}
renderElements(tasks);
