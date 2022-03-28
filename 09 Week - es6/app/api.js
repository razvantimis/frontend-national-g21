// Un modul in js este defapt in fisier
// Avantaje
// 1. Scopul variabielor si functiolor dintr-un modul, raman la nivelul fisierului
// 2. Doar noi decidem ca vrem sa exportam in experior din fisier 

const baseUrl = "http://localhost:3000"; // scopul ei va fi doar aici in fisier

const getTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`)
  const todos = await response.json()
  return todos
}

export {
  getTodos
}

// 1
export {
  // punem ce exportam , variabile, functii
}

// 2. direct inaite de definirea variabilelor/functii
export const a = 10
export function test() {

}

// cand facem import
import { a, test } from './api.js'

// 3. export default
// incurajeaza ca un fisier sa exporte un singur lucru

export default getTodos

import getTodos from './api.js'


// daca folosim 1/2 + 3
export const a2 = 10
export function test2() {

}
function test455(){}

export default test455;


import test455, { test } from './api.js'