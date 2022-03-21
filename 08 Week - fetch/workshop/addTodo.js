// 2. Sa permitem adaugarea unui TODO
console.log("addTodo.js -", baseUrl);

// Task1: Facem un input + button
// Task2: Sa inregistram un event pe button. Cand se face click sa obtinem valoare din input
// Task3: Facem request la server cu valoare din input 

const toDoInput = document.getElementById("todo-input");
const toDoButton = document.getElementById("todo-button");

toDoButton.onclick = function () {
  console.log(toDoInput.value)
  const newTodo = {
    name: toDoInput.value,
    completed: false
  }

  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' // ii spunem la server ca trimitem json
    },
    body: JSON.stringify(newTodo)
  })
    .then(function () {
    })
}

