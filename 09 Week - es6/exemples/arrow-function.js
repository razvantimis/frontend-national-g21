// Normal function
function getAge() { // are hosting si permite suprascrierea ( ca si var )
  return 29;
}
console.log(getAge())

// expression function

const getAge = function () {
  return 29;
}
// const getAge = function (){ // nu putem defita de doua ori + block scope
//   return 29;
// }
// console.log(getAge())

// Care este diferenta?
// expression function are toate calitatile de la const 
// iar cu function are calitatile lui var, hosting + scopul


// Arrow function - tot timpul sunt expresi
const getAge = () => {
  return 29
}

(() => {
  // se pot folosi pentru a scunde variabile
  console.log('ma apelez direct')
})()

// nu mai definim return + {} si punem direct o expressie
// returnam direct
const getAge = () => 29 + 3;

const getUser = () => ({ name: 'Razvan', password: '12345' })

// daca avem doar un parametru putem fara ()
const isMan = flag => flag === 'M';

console.log(isMan('M')) // true
console.log(isMan('F')) // false