console.log('test')

for (let i = 1; i < 100; i++) {
  console.log(i);
}

async function main(){
  // nu putem folosi fetch doar din node v18
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos = await response.json();
  console.log(todos)
}

main();