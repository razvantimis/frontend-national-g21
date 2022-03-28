function createTodo(text, id) {
  const todoHtml = document.createElement("li")
  todoHtml.innerText = text;
  return todoHtml;
}

// export { createTodo }
export default createTodo;