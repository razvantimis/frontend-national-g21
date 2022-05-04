
class CounterV2 extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    };
  }

  // folosim arrow function deoarece se pierde this 
  // atunci cand este trimisa metoda pe event-ul de onClick
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {

    return (
      <div>
        <h1>Version 2</h1>
        <button onClick={this.increment}>Increment</button>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

// State ramane intre re-renderul componentei - 
function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  )

}

function App() {
  return (
    <div>
      <Counter />
      <CounterV2 />
    </div>
  )
}



const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)

