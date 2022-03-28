// logica de todos cu dom 
import { getTodos } from './api.js'
import { createTodo } from './utils.js';

// ui.js foloseste createTodo din utils.js si getTodos din api.js
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


