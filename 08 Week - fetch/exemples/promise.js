// Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Fetch returneaza promisiunea ca vom primi datele de la server
const promise = fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'GET' // POST/DELETE
})

//daca promisul se termina 
// - cu sucess se apeleaza callback-ul de pe then
// - cu eroare se apeleaza callback-ul de pe catch
// .finally care se apeleaza oricum

promise
  .then(
    function (response) {
      console.log(response)
      console.log('sa termina cu succes promisul')
      // response.json() - va returna un promise cu datele nostre deja parsate ( adica aplica JSON.parse )
      return response.json(); // se returneaza un promise
    }
  )
  .then(function (result) { // al doi then este pe ce returneaza  response.json();
    console.log(result); // array de js cu obiecte product
  })

promise.catch(
  function (error) {

    console.log(error)

    // un exemplu daca nu avem internet
    // Daca serverul are o erroare
    console.log('sa termina cu eroare')
  }
)

promise.finally(
  function () {
    // daca punem un loading indicator - un indicator ca se incarca datele
    console.log('dupa ce sa terminat promisul dar nu conteaza daca cu succes sau erroare')
  }
)