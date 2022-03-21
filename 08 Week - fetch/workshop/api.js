// Aici tinem request-urile la server

// Tinem codul care este share intre addTodo si displayTodos

// care este scopul variabilei? Global - vizibil in toata pagina din browser

const baseUrl = 'http://localhost:3000';

function getTodos() {
  return fetch(`${baseUrl}/todos`)
    .then(function (response) {
      return response.json()
    })
}