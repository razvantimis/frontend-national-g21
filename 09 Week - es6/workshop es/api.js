// Aici tinem request-urile la server

// Tinem codul care este share intre addTodo si displayTodos

// care este scopul variabilei? Global - vizibil in toata pagina din browser

const baseUrl = 'http://localhost:3000';

// function getTodos() {
//   return fetch(`${baseUrl}/todos`)
//     .then(function (response) {
//       return response.json()
//     })
// } 

const getTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`)
  const todos = await response.json()
  return todos
}


// function createToDo(newToDo){
//   return fetch(`${baseUrl}/todos`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json' // ii spunem la server ca trimitem json
//     },
//     body: JSON.stringify(newToDo)
//   })
// }

const createToDoServer = async (newToDo) => {
  const response = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' // ii spunem la server ca trimitem json
    },
    body: JSON.stringify(newToDo)
  })

  return response.json();
}
export { getTodos }