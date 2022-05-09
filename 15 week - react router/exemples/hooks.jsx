

function Counter(props) {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  // useEffect vrea sa inlocuiesca life cycle din class
  // Doi parametri: 1. primul param este un callback function 
  // 2. este un array de dependinte, poti fi variabile/ functii
  React.useEffect(() => {
    console.log('se schimba count')
  }, [count]) // de fiecare daca cand se schimba orice deps din array se va executa din nou callback-ul

  React.useEffect(() => {
    console.log('se schimba key1')
  }, [props.key1])


  React.useEffect(() => {
    // se apeleaza prima data dupa ce se randeaza

    return () => {
      // clean function
      //  se apeleaza dupa ce componenta sa fost scoasa din DOM
    }
  }, [])
  
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
      <Counter key1={10} />
    </div>
  )
}

const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)