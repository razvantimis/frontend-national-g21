
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
// Life cycle la componenta - fazele prin care trece o componenta pana arata in DOM
// + cand dispare din DOM
class TodoList extends React.Component {
  // 1. constructor este apelat prima data 
  constructor() {
    super();
    this.state = {
      todos: [],
      isLoading: false
    }


    // getTodos().then(todos => {
    //   console.log(todos)
    // })
  }
  // 2. se apeleaza inaite sa apara componenta in DOM ( de evitat )
  componentWillMount() {
  }

  // 3. Se apeleaza imediat dupa ce se afiseaza componenta 
  componentDidMount() {
    // cel mai indicat este sa facem fetch dupa ce sa afisat componenta
    // doare deobicei afisam un loading sau skeleton
    this.setState({ isLoading: true })
    getTodos()
      .then(todos => {
        console.log(todos)

        this.setState({ isLoading: false, todos: todos })
      })
  }

  // 4. se apeleaza dupa ce componenta sa fost scoasa din DOM
  componentDidUnmount() {

  }

  render() {

    if (this.state.isLoading) return (<div>Loading todos ....</div>)

    return (
      <div>
        {this.state.todos.map(todo => (
          <Todo title={todo.name} />
        ))}
      </div>
    )
  }
}

function App() {
  return (<TodoList />)
}


const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)

