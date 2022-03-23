// Promise 

const getTodos = () => {

  // const onSucces = todos => {
  //   console.log(todos)
  //   // aici putm face logica
  // }
  fetch('http://localhost:3000/todos')
    // .then(response => {
    //   return response.join();
    // })
    .then(response => response.json())
    // .then(console.log)
    // .then(onSucces)
    .then(todos => {
      console.log(todos)
      // aici putm face logica
    })
    .catch(err => {
      console.log(err);
    })
}

// async/await
// un mod de a scrie codul fara a folosi callback
// Regula: ca sa putem folosi wait trebui sa fim intr-o functie async
// Async/wait ne ajuta sa scrie codul asyncron intr-un mod syncron
const getTodosV2 = async () => {

  try {
    console.log('getTodosV2 ----- 1')

    const response = await fetch('http://localhost:3000/todos');
    console.log('getTodosV2 ----- 2')

    const todos = await response.json();
    console.log('getTodosV2 ----- 3')

    console.log(todos)
  } catch (err) { // ca sa putem face logica daca vine erroare
    console.log(err);
    // facem din nou fetch
    // verificam daca user are internet
    // afisam pe UI un mesaj sugestiv
  }
}

async function getTodosV3(){
  const response = await fetch('http://localhost:3000/todos');
  const todos = await response.json();
  console.log(todos)
  return todos;
}

// asa putem cu .then
getTodosV3().then(todos => {
  console.log(todos)
})

// sau
async function main(){
  const todos = await getTodosV3();
  
}
