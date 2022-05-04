
function Todo(props) {
  return (
    <div className="post">
      <h1>{props.title}</h1>
    </div>
  )
}
const baseUrl = 'http://localhost:3000';

function getTodos() {
  return fetch(`${baseUrl}/todos`)
    .then(function (response) {
      return response.json()
    })
}

function useTodos() {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    getTodos()
      .then(todos => {
        console.log(todos)

        setTodos(todos)
        setIsLoading(false)
      })
  }, [])

  return { isLoading, todos }
}

function TodoList() {
  const { isLoading, todos } = useTodos();
  if (isLoading) return (<div>Loading todos ....</div>)

  return (
    <div>
      {todos.map(todo => (
        <Todo title={todo.name} />
      ))}
    </div>
  )
}

function App() {
  return (<TodoList />)
}


const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)

