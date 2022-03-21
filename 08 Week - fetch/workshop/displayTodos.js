
// 1. Sa afisam o lista de TODO items

// Task1: Sa facem request la server dupa lista de todos - getTodos
// Task2: Am creat element de html pe baza datele de la server

getTodos().then(function (todos) { // cod async
  // console.log(todos)
  const ulHTML = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i])
    const itemHTML = createTodo(todos[i].name);
    ulHTML.appendChild(itemHTML);
  }
  document.body.appendChild(ulHTML)
})


function createTodo(text) {
  const todoHtml = document.createElement("li")
  todoHtml.innerText = text;
  return todoHtml;
}

