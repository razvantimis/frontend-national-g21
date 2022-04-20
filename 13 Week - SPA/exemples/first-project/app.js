import parseInt from 'parse-int';

console.log(parseInt(10))
console.log(parseInt("23"))


import fetch from 'node-fetch'; // bad practic sa avem importul mai jos
async function main() {
  // nu putem folosi fetch doar din node v18
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json();
  console.log("todos length = ", todos.length)
}

main();