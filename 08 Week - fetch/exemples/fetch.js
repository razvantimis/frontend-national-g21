// AJAX = Asynchronous JavaScript and XML
// Ca implementare avem XMLHttpRequest
// es6 sa adaugat fetch
// al doi lea parametru la fetch este options
const baseURL = "http://localhost:3000";

// 1. Get all todos: GET http://localhost:3000/todos
fetch(`${baseURL}/todos`, {
  method: "GET",
})
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (result) {
    console.log("result = ", result);
  });

// 2. Get todos by id : GET http://localhost:3000/todos/:id
const toDoId = "1647456176638";
fetch(`${baseURL}/todos/${toDoId}`, {
  // method: 'GET' - by default este GET
})
  .then(function (response) {
    return response.json();
  })
  .then(function (toDo) {
    console.log("toDo = ", toDo);
  });

// v2
// fetch(`${baseURL}/todos/${toDoId}`, {
//   // method: 'GET' - by default este GET
// })
//   .then(function (response) {
//     response.json().then(function (toDo) {
//       console.log("toDo = ", toDo);
//     });
//   })


// 3. Add todo : POST http://localhost:3000/todos + body
function addTodo() {
  const newTodo = {
    name: "mers la piata",
    completed: false
  }
  fetch(`${baseURL}/todos`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' // ii spunem la server ca trimitem json
    },
    body: JSON.stringify(newTodo)
  })
}
// addTodo()

// 4. Remove todo : DELETE http://localhost:3000/todos/:id
function removeTodo() {
  const deleteId = "1647456176638"
  // fetch(`http://localhost:3000/todos/1647456176638`, {
  //   method: "DELETE",
  // })
  fetch(`${baseURL}/todos/${deleteId}`, {
    method: "DELETE",
  })
}

// removeTodo();

// 4. Update todo : PUT http://localhost:3000/todos/:id + body
function updateTodo() {
  const updateTodoId = "1647068908937";
  const updateTodoData = {
    name: "mers acasa",
    completed: false
  }

  fetch(`${baseURL}/todos/${updateTodoId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json' // ii spunem la server ca trimitem json
    },
    body: JSON.stringify(updateTodoData)
  })
}

updateTodo()