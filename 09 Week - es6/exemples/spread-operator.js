// Spread operator / Function Rest parameters / Copy obj

// "..." pot fi numite fie Spread operator, fie Rest parameters

// 1. Copy obj / array

// Object 
const person = { firstName: 'Alex', cnp: '23423423', isMinor: false }

// person.firstName = 'R' - va schimba valoare de la proiectul person

// putem adauga sau suprascrie proprietatile 
// ( depinde ordinea, ultima prop suprascrie pe cea din fata)
const personCopy = {
  ...person, // ori firstName: 'Alex', cnp: '23423423', isMinor: false
  age: 32,
  firstName: 'M', // suprascrie proprietatea din person
}

personCopy.firstName = 'R' // asta nu va schimba valoare din person.firstName

// Array
const array2 = [1, 2, 3];

const array2Copy = [...array2, 45]

// Function Rest parameters

function showAll(firstArg, secondArg, ...restParamaters) {
  console.log(firstArg); // firstArg = 1
  console.log(secondArg); // secondArg = 3
  console.log(restParamaters); // restParamaters = ["test", "45", [5, 2, 2], false, 1 + 34 + 1, array2Copy, { a: 1 }, {}]
}

showAll(1, 3, "test", "45", [5, 2, 2], false, 1 + 34 + 1, array2Copy, { a: 1 }, {})


// Speard op

function displayTodos(firstArg, secondArg) {
  console.log(firstArg); // firstArg = todos[0] = { name: 'todo 1' }
  console.log(secondArg); // secondArg = todos[1] = { name: 'todo 2' }
}

const todos = [{ name: 'todo 1' }, { name: 'todo 2' }]

displayTodos(...todos)


function showTheNumbers(arg1, arg2, arg3) {
  console.log(arg1) // arg1 = 3
  console.log(arg2) // arg2 = 5
  console.log(arg3) // arg3 = 8
}
const array4 = [3, 5, 8];

showTheNumbers(...array4);
// showTheNumbers(3,5,8)

function display() {

}


display(34, 5, 34);


