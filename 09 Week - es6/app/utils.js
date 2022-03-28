// Functio care ne ajuta in aplicatie

export function createTodo(text, id) {
  const todoHtml = document.createElement("li")
  todoHtml.innerText = text;
  return todoHtml;
}

export const MSG = 'test'