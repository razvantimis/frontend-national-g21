
const baseUrl = "http://localhost:3000"; // scopul ei va fi doar aici in fisier

const getTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`)
  const todos = await response.json()
  return todos
}
const test1 = 10;

export {
  getTodos,
  test1,
}
