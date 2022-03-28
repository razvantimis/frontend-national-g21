
// 1. Sa afisam o lista de TODO items
import { getTodos } from "../api.js"
import createTodoHtml from "./createTodo.js"

console.log('cod global care se executa cand este importat')

async function displayTodos() {
  const todos = await getTodos()
  const ulHTML = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    const { name, id } = todos[i];
    const itemHTML = createTodoHtml(name, id);

    // const deleteBtn = getDeleteButton(todos[i].id)
    // itemHTML.appendChild(deleteBtn);

    ulHTML.appendChild(itemHTML);
  }
  document.body.appendChild(ulHTML)
}

export default displayTodos;