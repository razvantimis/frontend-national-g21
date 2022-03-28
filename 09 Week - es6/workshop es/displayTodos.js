
// 1. Sa afisam o lista de TODO items


async function displayTodos() {
  const todos = await getTodos()
  const ulHTML = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i])
    const itemHTML = createTodo(todos[i].name, todos[i].id);

    // const deleteBtn = getDeleteButton(todos[i].id)
    // itemHTML.appendChild(deleteBtn);

    ulHTML.appendChild(itemHTML);
  }
  document.body.appendChild(ulHTML)
}

displayTodos();

function createTodo(text, id) {
  const todoHtml = document.createElement("li")
  todoHtml.innerText = text;
  return todoHtml;
}

